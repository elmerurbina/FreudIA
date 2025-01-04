from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Freud_IA.backend.services.general.general_app.migrations.views import RelaxingPlaceViewSet

router = DefaultRouter()
router.register(r'places', RelaxingPlaceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
