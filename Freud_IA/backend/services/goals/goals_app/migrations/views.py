# views.py in your goals app

from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from .models import Goal
from .serializers import GoalSerializer


class GoalViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing goals.
    """

    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """
        Overriding the perform_create method to associate the goal with the authenticated user.
        """
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['get'])
    def mark_completed(self, request, pk=None):
        """
        Custom action to mark a goal as completed.
        """
        goal = self.get_object()
        goal.completed = (
            True  # Assuming you added a 'completed' field in your Goal model
        )
        goal.save()
        return Response({"status": "Goal marked as completed"})

    @action(detail=True, methods=['patch'])
    def update_due_date(self, request, pk=None):
        """
        Custom action to update the due date of a goal.
        """
        goal = self.get_object()
        due_date = request.data.get("due_date")
        if due_date:
            goal.due_date = due_date
            goal.save()
            return Response({"status": "Due date updated successfully"})
        return Response(
            {"status": "No due date provided"}, status=status.HTTP_400_BAD_REQUEST
        )

    @action(detail=False, methods=['get'])
    def user_goals(self, request):
        """
        Custom action to list all goals for the authenticated user.
        """
        goals = Goal.objects.filter(user=request.user)
        serializer = self.get_serializer(goals, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def completed_goals(self, request):
        """
        Custom action to list all completed goals for the authenticated user.
        """
        goals = Goal.objects.filter(user=request.user, completed=True)
        serializer = self.get_serializer(goals, many=True)
        return Response(serializer.data)
