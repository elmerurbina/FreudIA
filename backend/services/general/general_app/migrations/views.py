from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import RecommendedPlace
from .serializers import RecommendedPlaceSerializer
from rest_framework.permissions import IsAuthenticated
from django.conf import settings
import csv
import os


class RecommendedPlaceViewSet(viewsets.ModelViewSet):
    queryset = RecommendedPlace.objects.all()
    serializer_class = RecommendedPlaceSerializer
    permission_classes = [IsAuthenticated]  # Adjust based on your use case

    # Custom action to filter recommended places by the user's location
    @action(detail=False, methods=['get'])
    def filter_by_location(self, request):
        # Get user's pais and departamento from request user
        user_pais = request.user.profile.pais
        user_departamento = request.user.profile.departamento

        # Filter places based on the user's pais and departamento
        recommended_places = RecommendedPlace.objects.filter(
            pais=user_pais, departamento=user_departamento
        )

        # Serialize the filtered places
        serializer = self.get_serializer(recommended_places, many=True)
        return Response(serializer.data)

    # Custom action to refresh the recommended places from CSV (for admin or manual trigger)
    @action(detail=False, methods=['post'])
    def refresh_places(self, request):
        file_path = os.path.join(
            settings.BASE_DIR, 'general', 'data', 'places_dataset.csv'
        )

        # Ensure CSV file exists
        if not os.path.exists(file_path):
            return Response({'error': 'CSV file not found'}, status=400)

        # Read the CSV and update places
        with open(file_path, mode='r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                RecommendedPlace.objects.update_or_create(
                    name=row['name'],
                    pais=row['pais'],
                    departamento=row['departamento'],
                    defaults={
                        'description': row['description'],
                        'category': row['category'],
                        'image_url': row.get('image_url', ''),
                    },
                )

        return Response({'status': 'Places refreshed successfully'})

    # Custom action to retrieve a single recommended place by its ID
    @action(detail=True, methods=['get'])
    def retrieve_place(self, request, pk=None):
        place = self.get_object()
        serializer = self.get_serializer(place)
        return Response(serializer.data)
