import csv
import os
from django.db import models, connection
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from django.contrib.auth.models import User


# Model to store recommended places
class RecommendedPlace(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    pais = models.CharField(max_length=100)
    departamento = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.category}) - {self.departamento}, {self.pais}"

    @staticmethod
    def execute_stored_procedure(proc_name, params=None):
        """Helper method to execute stored procedures."""
        with connection.cursor() as cursor:
            cursor.callproc(proc_name, params or [])
            result = cursor.fetchall()
        return result

    @classmethod
    def load_places_from_procedure(cls, pais, departamento):
        """Load places based on stored procedure."""

        result = cls.execute_stored_procedure(
            'get_places_by_location', [pais, departamento]
        )
        return result


# Signal to load places dynamically from a CSV file when a new User is created
@receiver(post_save, sender=User)
def load_recommended_places(sender, instance, created, **kwargs):
    if created:
        # Get user's pais and departamento from the profile
        user_pais = instance.profile.pais
        user_departamento = instance.profile.departamento

        # Use the stored procedure to load places based on user's location
        places = RecommendedPlace.load_places_from_procedure(
            user_pais, user_departamento
        )
        for place in places:
            RecommendedPlace.objects.create(
                name=place[0],  # assuming the name is in the first column
                description=place[1],  # description in the second column
                pais=user_pais,
                departamento=user_departamento,
                category=place[2],  # category in the third column
                image_url=place[3] if len(place) > 3 else '',  # optional image_url
            )


# Load places from a CSV file when a new User is created (optional)
@receiver(post_save, sender=User)
def load_places_from_csv(sender, instance, created, **kwargs):
    if created:
        user_pais = instance.profile.pais
        user_departamento = instance.profile.departamento

        file_path = os.path.join(
            settings.BASE_DIR, 'general', 'data', 'places_dataset.csv'
        )
        with open(file_path, mode='r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if (
                    row['pais'] == user_pais
                    and row['departamento'] == user_departamento
                ):
                    RecommendedPlace.objects.create(
                        name=row['name'],
                        description=row['description'],
                        pais=row['pais'],
                        departamento=row['departamento'],
                        category=row['category'],
                        image_url=row.get('image_url', ''),
                    )
