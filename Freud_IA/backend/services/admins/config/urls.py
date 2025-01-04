from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Freud_IA.backend.services.admins.admins_app.migrations.views import PsychologistViewSet, DirectiveViewSet

# Create the router and register the viewsets
router = DefaultRouter()
router.register(r'psychologists', PsychologistViewSet)
router.register(r'directives', DirectiveViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  # Include the generated URLs
]
