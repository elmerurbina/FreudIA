from django.db import models, connection
from django.conf import settings

class SupportContact(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="support_contacts"
    )
    name_one = models.CharField(max_length=255)
    name_two = models.CharField(max_length=255)
    psychologist_name = models.CharField(max_length=255)
    contact_one = models.CharField(max_length=20)
    contact_two = models.CharField(max_length=20)
    psychologist_contact = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        """Override save to call stored procedure for insert"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_save_support_contact', [
                self.user.id,  # Use self.user.id to correctly pass the user_id
                self.name_one,
                self.name_two,
                self.psychologist_name,
                self.contact_one,
                self.contact_two,
                self.psychologist_contact,
                None  # Primary key is None for insert
            ])
        super(SupportContact, self).save(*args, **kwargs)

    def update(self):
        """Update the existing SupportContact object using stored procedure"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_save_support_contact', [
                self.user.id,  # Use self.user.id to correctly pass the user_id
                self.name_one,
                self.name_two,
                self.psychologist_name,
                self.contact_one,
                self.contact_two,
                self.psychologist_contact,
                self.pk  # The primary key is passed to update the existing record
            ])
        self.save()

    def delete(self, *args, **kwargs):
        """Override delete to call stored procedure"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_delete_support_contact', [self.pk])
        super(SupportContact, self).delete(*args, **kwargs)

    @staticmethod
    def get_by_user_id(user_id):
        """Retrieve all SupportContact records for a given user_id"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_get_support_contact_by_user_id', [user_id])
            results = cursor.fetchall()  # Fetch all results
        return results


class NotificationSetting(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="notification_settings"
    )
    interval = models.CharField(max_length=50, choices=[
        ('daily', 'Diario'),
        ('hourly', 'Cada hora'),
        ('every_3_hours', 'Cada 3 horas'),
        ('custom', 'Personalizado'),
    ])
    custom_times = models.JSONField(default=list)  # List of custom times (HH:MM)
    whatsapp_number = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        """Override save to call stored procedure for insert"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_save_notification_setting', [
                self.user.id,  # Use self.user.id to correctly pass the user_id
                self.interval,
                self.custom_times,
                self.whatsapp_number,
                None  # Primary key is None for insert
            ])
        super(NotificationSetting, self).save(*args, **kwargs)

    def update(self):
        """Update the existing NotificationSetting object using stored procedure"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_save_notification_setting', [
                self.user.id,  # Use self.user.id to correctly pass the user_id
                self.interval,
                self.custom_times,
                self.whatsapp_number,
                self.pk  # The primary key is passed to update the existing record
            ])
        self.save()

    def delete(self, *args, **kwargs):
        """Override delete to call stored procedure"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_delete_notification_setting', [self.pk])
        super(NotificationSetting, self).delete(*args, **kwargs)

    @staticmethod
    def get_by_user_id(user_id):
        """Retrieve all NotificationSetting records for a given user_id"""
        with connection.cursor() as cursor:
            cursor.callproc('sp_get_notification_setting_by_user_id', [user_id])
            results = cursor.fetchall()  # Fetch all results
        return results
