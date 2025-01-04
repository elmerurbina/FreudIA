from rest_framework import serializers
from .models import RecommendedPlace


class RecommendedPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecommendedPlace
        fields = [
            'id',
            'name',
            'description',
            'pais',
            'departamento',
            'category',
            'image_url',
        ]
