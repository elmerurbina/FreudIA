from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Psychologist, Directive, execute_safe_sql
from .serializers import PsychologistSerializer, DirectiveSerializer
from rest_framework.permissions import IsAuthenticated


# Psychologist ViewSet
class PsychologistViewSet(viewsets.ModelViewSet):
    queryset = Psychologist.objects.all()
    serializer_class = PsychologistSerializer

    # Custom action to load profile using license as credential
    @action(detail=False, methods=['get'])
    def load_profile(self, request):
        """
        Load the psychologist profile based on the provided license.
        """
        license_number = request.query_params.get('license')
        if not license_number:
            return Response({'error': 'License number is required'}, status=400)

        try:
            psychologist = Psychologist.objects.get(license=license_number)
            serializer = self.get_serializer(psychologist)
            return Response(serializer.data, status=200)
        except Psychologist.DoesNotExist:
            return Response({'error': 'Profile not found'}, status=404)

    # Custom action to add keywords
    @action(detail=True, methods=['post'])
    def add_keywords(self, request, pk=None):
        psychologist = self.get_object()
        new_keywords = request.data.get('keywords', [])
        psychologist.keywords.extend(new_keywords)
        psychologist.save()
        return Response({'status': 'Keywords Added'})

    # Custom action to update studies
    @action(detail=True, methods=['post'])
    def update_studies(self, request, pk=None):
        psychologist = self.get_object()
        psychologist.studies = request.data.get('studies', psychologist.studies)
        psychologist.save()
        return Response({'status': 'Studies Updated'})

    # Custom action to update experience
    @action(detail=True, methods=['post'])
    def update_experience(self, request, pk=None):
        psychologist = self.get_object()
        psychologist.experience = request.data.get('experience', psychologist.experience)
        psychologist.save()
        return Response({'status': 'Experience Updated'})

    # Custom action to delete a psychologist profile
    @action(detail=True, methods=['delete'])
    def delete_psychologist(self, request, pk=None):
        psychologist = self.get_object()
        psychologist.delete()
        return Response({'status': 'Psychologist Deleted'})

# Directive ViewSet
class DirectiveViewSet(viewsets.ModelViewSet):
    queryset = Directive.objects.all()
    serializer_class = DirectiveSerializer
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

    # Custom action to verify a directive
    @action(detail=True, methods=['post'])
    def verify_directive(self, request, pk=None):
        directive = self.get_object()
        directive.is_verified = True
        directive.save()
        return Response({'status': 'Directive Verified'})

    # Custom action to delete a directive
    @action(detail=True, methods=['delete'])
    def delete_directive(self, request, pk=None):
        directive = self.get_object()
        directive.delete()
        return Response({'status': 'Directive Deleted'})

    # Custom function to execute safe SQL queries (optional feature)
    @action(detail=False, methods=['post'])
    def custom_sql(self, request):
        query = request.data.get('query', '')
        params = request.data.get('params', [])
        result = execute_safe_sql(query, params)
        return Response({'data': result})

