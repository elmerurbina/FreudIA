from django.contrib import admin
from Freud_IA.backend.services.authentication.auth_app.migrations.models import User, Payment

admin.site.register(User)
admin.site.register(Payment)
