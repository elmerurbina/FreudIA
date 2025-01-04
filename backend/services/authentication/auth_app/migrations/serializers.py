from rest_framework import serializers
from .models import User, Payment


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the User model.
    This will handle serialization and validation of user data.
    """

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'perfil_foto',
            'estado_psicologico',
            'date_joined',
        ]
        read_only_fields = ['id', 'date_joined']

    def validate_email(self, value):
        """
        Validate that the email is unique and properly formatted.
        """
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este correo electrónico ya está en uso.")
        return value

    def validate_perfil_foto(self, value):
        """
        Validate the profile photo (if provided).
        """
        if value and not value.name.endswith(('.jpg', '.jpeg', '.png')):
            raise serializers.ValidationError(
                "La foto de perfil debe ser en formato JPG o PNG."
            )
        return value


class PaymentSerializer(serializers.ModelSerializer):
    """
    Serializer for the Payment model.
    This will handle serialization and validation of payment data.
    """

    class Meta:
        model = Payment
        fields = ['id', 'user', 'card_number', 'expiration_date', 'cvv', 'plan']
        read_only_fields = ['id', 'user']

    def validate_card_number(self, value):
        """
        Validate that the card number follows a proper format.
        """
        if len(str(value)) != 16:
            raise serializers.ValidationError(
                "El número de tarjeta debe tener 16 dígitos."
            )
        return value

    def validate_cvv(self, value):
        """
        Validate that the CVV is exactly 3 digits.
        """
        if len(str(value)) != 3:
            raise serializers.ValidationError("El CVV debe tener 3 dígitos.")
        return value

    def validate_expiration_date(self, value):
        """
        Validate that the expiration date is in the correct format and hasn't passed.
        """
        from datetime import datetime

        if not value or len(value) != 5 or value[2] != '/':
            raise serializers.ValidationError(
                "La fecha de expiración debe estar en formato MM/AA."
            )

        month, year = value.split('/')
        if int(month) < 1 or int(month) > 12:
            raise serializers.ValidationError("El mes debe estar entre 01 y 12.")

        current_year = datetime.now().year % 100  # Only take the last two digits
        if int(year) < current_year:
            raise serializers.ValidationError("La tarjeta ha expirado.")
        elif int(year) == current_year and int(month) < datetime.now().month:
            raise serializers.ValidationError("La tarjeta ha expirado.")

        return value


class PaymentDetailsSerializer(serializers.ModelSerializer):
    """
    A special serializer for displaying payment details.
    """

    user = UserSerializer(read_only=True)

    class Meta:
        model = Payment
        fields = ['id', 'user', 'card_number', 'expiration_date', 'cvv', 'plan']
        read_only_fields = ['id', 'user']
