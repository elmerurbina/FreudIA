from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Freud_IA.backend.services.phrase_network.pn_app.migrations.views import (
    SupportContactViewSet,
    NotificationSettingViewSet,
)

router = DefaultRouter()
router.register(r'support_contacts', SupportContactViewSet, basename='support_contact')
router.register(
    r'notification_settings',
    NotificationSettingViewSet,
    basename='notification_setting',
)

urlpatterns = [
    path('', include(router.urls)),
]
