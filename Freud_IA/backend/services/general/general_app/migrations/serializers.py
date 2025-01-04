from rest_framework import serializers
from .models import RelaxingPlace

class RelaxingPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RelaxingPlace
        fields = '__all__'
