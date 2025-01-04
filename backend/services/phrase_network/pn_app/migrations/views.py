from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from .models import SupportContact, NotificationSetting
from .serializers import SupportContactSerializer, NotificationSettingSerializer
from django.contrib.auth.models import User


class SupportContactViewSet(viewsets.ModelViewSet):
    queryset = SupportContact.objects.all()
    serializer_class = SupportContactSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id', None)
        if user_id is not None:
            try:
                user = User.objects.get(id=user_id)
                return SupportContact.objects.filter(user=user)
            except User.DoesNotExist:
                raise NotFound('User not found.')
        return SupportContact.objects.all()

    @action(detail=True, methods=['post'])
    def update_contact(self, request, pk=None):
        """Update an existing SupportContact"""
        contact = self.get_object()
        serializer = SupportContactSerializer(contact, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    @action(detail=False, methods=['post'])
    def create_contact(self, request):
        """Create a new SupportContact"""
        serializer = SupportContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    @action(detail=True, methods=['delete'])
    def delete_contact(self, request, pk=None):
        """Delete a SupportContact by its id"""
        contact = self.get_object()
        contact.delete()
        return Response({'message': 'SupportContact deleted successfully'})


class NotificationSettingViewSet(viewsets.ModelViewSet):
    queryset = NotificationSetting.objects.all()
    serializer_class = NotificationSettingSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id', None)
        if user_id is not None:
            try:
                user = User.objects.get(id=user_id)
                return NotificationSetting.objects.filter(user=user)
            except User.DoesNotExist:
                raise NotFound('User not found.')
        return NotificationSetting.objects.all()

    @action(detail=True, methods=['post'])
    def update_setting(self, request, pk=None):
        """Update an existing NotificationSetting"""
        setting = self.get_object()
        serializer = NotificationSettingSerializer(
            setting, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    @action(detail=False, methods=['post'])
    def create_setting(self, request):
        """Create a new NotificationSetting"""
        serializer = NotificationSettingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    @action(detail=True, methods=['delete'])
    def delete_setting(self, request, pk=None):
        """Delete a NotificationSetting by its id"""
        setting = self.get_object()
        setting.delete()
        return Response({'message': 'NotificationSetting deleted successfully'})
