from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework import permissions
from .models import User, Payment
from .serializers import UserSerializer, PaymentSerializer
from django.db import transaction
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    def perform_create(self, serializer):
        """
        Override the create method to ensure that a user is created correctly.
        """

        serializer.save()

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def update_profile(self, request, pk=None):
        """
        Custom action to update the user's profile.
        """
        user = self.get_object()
        # Check if the authenticated user is the one requesting the update
        if user != request.user:
            return Response({"detail": "No tienes permiso para editar este perfil."}, status=status.HTTP_403_FORBIDDEN)

        # Perform the profile update
        user.perfil_foto = request.data.get('perfil_foto', user.perfil_foto)
        user.estado_psicologico = request.data.get('estado_psicologico', user.estado_psicologico)
        user.save()

        return Response(UserSerializer(user).data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def reset_password(self, request, pk=None):
        """
        Custom action to reset the password of a user.
        """
        user = self.get_object()
        if user != request.user:
            return Response({"detail": "No tienes permiso para cambiar la contraseña."}, status=status.HTTP_403_FORBIDDEN)

        new_password = request.data.get('new_password')
        if not new_password:
            return Response({"detail": "Se requiere una nueva contraseña."}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()

        return Response({"detail": "Contraseña actualizada correctamente."}, status=status.HTTP_200_OK)

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]  # Ensure that only authenticated users can access

    def perform_create(self, serializer):
        """
        Override the create method to ensure that payment details are correctly associated with the user.
        """
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def update_payment(self, request, pk=None):
        """
        Custom action to update payment details for the user.
        """
        payment = self.get_object()
        if payment.user != request.user:
            return Response({"detail": "No tienes permiso para editar este pago."}, status=status.HTTP_403_FORBIDDEN)

        payment.card_number = request.data.get('card_number', payment.card_number)
        payment.expiration_date = request.data.get('expiration_date', payment.expiration_date)
        payment.cvv = request.data.get('cvv', payment.cvv)
        payment.plan = request.data.get('plan', payment.plan)
        payment.save()

        return Response(PaymentSerializer(payment).data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def delete_payment(self, request, pk=None):
        """
        Custom action to delete the payment information of a user.
        """
        payment = self.get_object()
        if payment.user != request.user:
            return Response({"detail": "No tienes permiso para eliminar este pago."}, status=status.HTTP_403_FORBIDDEN)

        payment.delete()

        return Response({"detail": "Información de pago eliminada correctamente."}, status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def get_user_payment(self, request):
        """
        Custom action to get the current payment details for the authenticated user.
        """
        payment = Payment.objects.filter(user=request.user).first()

        if not payment:
            return Response({"detail": "No se encontraron detalles de pago para este usuario."}, status=status.HTTP_404_NOT_FOUND)

        return Response(PaymentSerializer(payment).data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def create_payment(self, request):
        """
        Custom action to create payment details for the user.
        """
        user = request.user
        if hasattr(user, 'payment'):
            return Response({"detail": "Ya existe una información de pago para este usuario."}, status=status.HTTP_400_BAD_REQUEST)

        # Ensure the data is correct before creating the payment
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserPaymentViewSet(viewsets.ViewSet):
    """
    ViewSet for handling user and payment management in one place.
    This combines actions for both User and Payment, though typically you'd have them separate.
    """
    @action(detail=True, methods=['post'])
    def create_user_payment(self, request, pk=None):
        """
        Custom action to create a user and their payment details.
        """
        user_data = request.data.get('user')
        payment_data = request.data.get('payment')

        # Create user and payment within a transaction
        with transaction.atomic():
            user_serializer = UserSerializer(data=user_data)
            if user_serializer.is_valid():
                user = user_serializer.save()
                payment_serializer = PaymentSerializer(data=payment_data)
                if payment_serializer.is_valid():
                    payment_serializer.save(user=user)
                    return Response({
                        "user": user_serializer.data,
                        "payment": payment_serializer.data
                    }, status=status.HTTP_201_CREATED)

            return Response({
                "detail": "Error al crear usuario o detalles de pago."
            }, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def login(request):
    """
    Login view to authenticate user with password or biometric data.
    Assumes a front-end that handles biometrics (e.g., fingerprint or face recognition).
    """
    username = request.data.get('username')
    password = request.data.get('password')

    if username and password:
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # User authenticated successfully
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    # Handling biometrics is client-side and would typically pass an auth token or biometric data
    # that should be validated against a secure API or system

    if 'biometric_token' in request.data:
        biometric_token = request.data['biometric_token']

        # Example: Validate the token with a biometric service
        # For simplicity, this assumes a successful biometric authentication
        try:
            user = User.objects.get(username=username)  # Or fetch based on biometric token
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"detail": "User not found or invalid biometric data."},
                            status=status.HTTP_401_UNAUTHORIZED)

    return Response({"detail": "Provide credentials or biometric data."}, status=status.HTTP_400_BAD_REQUEST)
