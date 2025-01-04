from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import connection
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from Freud_IA.backend.services.admins.admins_app.migrations.serializers import (
    PsychologistSerializer,
    DirectiveSerializer,
)


# Safe function to interact with the database and prevent SQL injections
def execute_safe_sql(query, params=None):
    with connection.cursor() as cursor:
        cursor.execute(query, params)
        return cursor.fetchall()


# Model for Psychologists
class Psychologist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    license = models.CharField(max_length=255, unique=True)
    studies = models.TextField()
    experience = models.TextField()
    keywords = models.JSONField()  # Store keywords in a JSON format

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.license}"

    # Automatically create a Psychologist profile when a new User is created
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Psychologist.objects.create(user=instance)

    # Save the profile when the User is updated
    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.psychologist.save()


# Example ViewSet for CRUD operations on Psychologist model
class PsychologistViewSet(viewsets.ModelViewSet):
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer

    @action(detail=True, methods=['get'])
    def get_profile(self, request, pk=None):
        """
        Custom action to retrieve the profile information of the psychologist.
        """
        psychologist = self.get_object()
        profile_data = {
            'first_name': psychologist.first_name,
            'last_name': psychologist.last_name,
            'license': psychologist.license,
            'studies': psychologist.studies,
            'experience': psychologist.experience,
            'keywords': psychologist.keywords,
        }
        return Response(profile_data)

    @action(detail=True, methods=['post'])
    def add_keywords(self, request, pk=None):
        psychologist = self.get_object()
        new_keywords = request.data.get('keywords', [])
        psychologist.keywords.extend(new_keywords)
        psychologist.save()
        return Response({'status': 'Keywords Added'})

    @action(detail=True, methods=['post'])
    def update_studies(self, request, pk=None):
        psychologist = self.get_object()
        psychologist.studies = request.data.get('studies', psychologist.studies)
        psychologist.save()
        return Response({'status': 'Studies Updated'})

    @action(detail=True, methods=['post'])
    def update_experience(self, request, pk=None):
        psychologist = self.get_object()
        psychologist.experience = request.data.get(
            'experience', psychologist.experience
        )
        psychologist.save()
        return Response({'status': 'Experience Updated'})

    @action(detail=True, methods=['post'])
    def delete_psychologist(self, request, pk=None):
        psychologist = self.get_object()
        psychologist.delete()
        return Response({'status': 'Psychologist Deleted'})


# Model for Directive
class Directive(models.Model):
    name = models.CharField(max_length=255)
    access_code = models.CharField(max_length=255, unique=True)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class DirectiveViewSet(viewsets.ModelViewSet):
    queryset = Directive.objects.all()
    serializer_class = DirectiveSerializer

    @action(detail=True, methods=['post'])
    def verify_directive(self, request, pk=None):
        directive = self.get_object()
        directive.is_verified = True
        directive.save()
        return Response({'status': 'Directive Verified'})

    @action(detail=True, methods=['delete'])
    def delete_directive(self, request, pk=None):
        directive = self.get_object()
        directive.delete()
        return Response({'status': 'Directive Deleted'})

    @action(detail=False, methods=['post'])
    def custom_sql(self, request):
        query = request.data.get('query', '')
        params = request.data.get('params', [])
        result = execute_safe_sql(query, params)
        return Response({'data': result})
