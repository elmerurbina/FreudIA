from django.db import models

class ChatMessage(models.Model):
    user_id = models.CharField(max_length=255)
    message = models.TextField()
    response = models.TextField()
    timestamp = models.DateTimeField()

    def __str__(self):
        return f'{self.user_id} - {self.timestamp}'
