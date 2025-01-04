from rest_framework import serializers
from .models import Psychologist, Directive
from django.contrib.auth.models import User

# Serializer for Psychologist model
class PsychologistSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())  # Link to the User model
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    license = serializers.CharField(max_length=255)
    studies = serializers.CharField(style={'base_template': 'textarea.html'})
    experience = serializers.CharField(style={'base_template': 'textarea.html'})
    keywords = serializers.ListField(child=serializers.CharField(max_length=255))

    class Meta:
        model = Psychologist
        fields = ['id', 'user', 'first_name', 'last_name', 'license', 'studies', 'experience', 'keywords']

    # Custom validation for the license field to ensure uniqueness
    def validate_license(self, value):
        if Psychologist.objects.filter(license=value).exists():
            raise serializers.ValidationError("This license number is already registered.")
        return value

    def create(self, validated_data):
        # Create a new Psychologist profile linked to a User instance
        user = validated_data.pop('user')
        psychologist = Psychologist.objects.create(user=user, **validated_data)
        return psychologist

    def update(self, instance, validated_data):
        # Update existing Psychologist profile
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.license = validated_data.get('license', instance.license)
        instance.studies = validated_data.get('studies', instance.studies)
        instance.experience = validated_data.get('experience', instance.experience)
        instance.keywords = validated_data.get('keywords', instance.keywords)
        instance.save()
        return instance


# Serializer for Directive model
class DirectiveSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)
    access_code = serializers.CharField(max_length=255)
    is_verified = serializers.BooleanField(default=False)

    class Meta:
        model = Directive
        fields = ['id', 'name', 'access_code', 'is_verified']

    # Custom validation for access_code field to ensure uniqueness
    def validate_access_code(self, value):
        if Directive.objects.filter(access_code=value).exists():
            raise serializers.ValidationError("This access code is already in use.")
        return value

    def create(self, validated_data):
        # Create a new Directive entry
        directive = Directive.objects.create(**validated_data)
        return directive

    def update(self, instance, validated_data):
        # Update existing Directive
        instance.name = validated_data.get('name', instance.name)
        instance.access_code = validated_data.get('access_code', instance.access_code)
        instance.is_verified = validated_data.get('is_verified', instance.is_verified)
        instance.save()
        return instance
