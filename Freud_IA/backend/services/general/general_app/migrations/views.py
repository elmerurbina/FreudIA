from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import RelaxingPlace
from .serializers import RelaxingPlaceSerializer
from rest_framework.permissions import IsAuthenticated

class RelaxingPlaceViewSet(viewsets.ModelViewSet):
    queryset = RelaxingPlace.objects.all()
    serializer_class = RelaxingPlaceSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def recommend(self, request):
        # Assuming `pais` and `departamento` are stored in the user's profile
        user = request.user
        pais = user.pais
        departamento = user.departamento

        # Filter places dynamically based on user's location
        places = RelaxingPlace.objects.filter(
            name__icontains=departamento  # Example: Search by name or other criteria
        ).order_by('-rating')[:5]  # Top 5 places by rating

        serializer = self.get_serializer(places, many=True)
        return Response(serializer.data)
