from rest_framework import serializers
from .models import SupportContact, NotificationSetting

class SupportContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportContact
        fields = ['id', 'user', 'name_one', 'name_two', 'psychologist_name', 'contact_one', 'contact_two', 'psychologist_contact']

class NotificationSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificationSetting
        fields = ['id', 'user', 'interval', 'custom_times', 'whatsapp_number']
