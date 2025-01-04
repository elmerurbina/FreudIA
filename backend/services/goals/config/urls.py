from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Freud_IA.backend.services.goals.goals_app.migrations.views import GoalViewSet

router = DefaultRouter()
router.register(r'goals', GoalViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
