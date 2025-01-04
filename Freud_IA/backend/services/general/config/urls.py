from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Freud_IA.backend.services.general.general_app.migrations.views import RecommendedPlaceViewSet

# Create a router and register the RecommendedPlace viewset
router = DefaultRouter()
router.register(r'recommended-places', RecommendedPlaceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
