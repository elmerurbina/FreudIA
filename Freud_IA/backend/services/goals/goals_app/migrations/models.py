from django.db import models
from django.conf import settings


class Goal(models.Model):
    # Define the choices for the status field
    STATUS_CHOICES = [
        ('not_started', 'Not Started'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    due_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # Points to the User model from the auth_app
        on_delete=models.CASCADE,  # If the user is deleted, delete associated goals
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,  # Use the choices for status
        default='not_started',  # Set default status as "Not Started"
    )

    def __str__(self):
        return self.title

    # Method to retrieve all goals for a specific user
    @classmethod
    def get_goals_by_user(cls, user_id):
        return cls.objects.filter(user_id=user_id)

    # Method to retrieve a specific goal by ID
    @classmethod
    def get_goal_by_id(cls, goal_id):
        return cls.objects.filter(id=goal_id).first()

    # Method to update goal fields
    def update_goal(self, title=None, description=None, due_date=None):
        if title:
            self.title = title
        if description:
            self.description = description
        if due_date:
            self.due_date = due_date
        self.save()

    # Method to delete a goal
    def delete_goal(self):
        self.delete()

    # Method to create a new goal
    @classmethod
    def create_goal(cls, title, description, due_date, user):
        goal = cls(title=title, description=description, due_date=due_date, user=user)
        goal.save()
        return goal
