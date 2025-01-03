from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Freud_IA.backend.services.authentication.auth_app.migrations.views import UserViewSet, PaymentViewSet, login

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'payments', PaymentViewSet, basename='payment')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login, name='login'),
]
