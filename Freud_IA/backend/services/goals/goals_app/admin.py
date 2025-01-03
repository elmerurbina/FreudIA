from django.contrib import admin
from migrations.models import Goal


@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'due_date', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('user', 'due_date')
