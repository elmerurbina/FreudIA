from django.db import models, connection
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.utils.translation import gettext_lazy as _


# Custom User Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_('El correo electrónico es obligatorio'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


# Custom User Model
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('Correo Electrónico'), unique=True)
    nombres = models.CharField(_('Nombres'), max_length=100)
    apellidos = models.CharField(_('Apellidos'), max_length=100)
    perfil_foto = models.ImageField(
        _('Foto de Perfil'), upload_to='profiles/', null=True, blank=True
    )
    fecha_nacimiento = models.DateField(_('Fecha de Nacimiento'))
    pais = models.CharField(_('País'), max_length=50)
    departamento = models.CharField(_('Departamento'), max_length=50)
    estado_psicologico = models.CharField(
        _('Estado Psicológico'), max_length=100, blank=True
    )
    codigo_unico = models.CharField(_('Código Único'), max_length=20, blank=True)

    is_active = models.BooleanField(_('Activo'), default=True)
    is_staff = models.BooleanField(_('Es Staff'), default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'nombres',
        'apellidos',
        'fecha_nacimiento',
        'pais',
        'departamento',
    ]

    def __str__(self):
        return f"{self.nombres} {self.apellidos} ({self.email})"

    # CRUD Operations for User
    @staticmethod
    def create_user(
        email,
        nombres,
        apellidos,
        fecha_nacimiento,
        pais,
        departamento,
        password,
        perfil_foto=None,
        estado_psicologico=None,
    ):
        """
        Create a new user.
        """
        user = User.objects.create(
            email=email,
            nombres=nombres,
            apellidos=apellidos,
            fecha_nacimiento=fecha_nacimiento,
            pais=pais,
            departamento=departamento,
            password=password,
            perfil_foto=perfil_foto,
            estado_psicologico=estado_psicologico,
        )
        return user

    @staticmethod
    def get_user_by_id(user_id):
        """
        Retrieve user by ID.
        """
        try:
            user = User.objects.get(id=user_id)
            return user
        except User.DoesNotExist:
            return None

    @staticmethod
    def update_user(
        user_id,
        email=None,
        nombres=None,
        apellidos=None,
        fecha_nacimiento=None,
        pais=None,
        departamento=None,
        perfil_foto=None,
        estado_psicologico=None,
    ):
        """
        Update user details.
        """
        user = User.get_user_by_id(user_id)
        if user:
            if email:
                user.email = email
            if nombres:
                user.nombres = nombres
            if apellidos:
                user.apellidos = apellidos
            if fecha_nacimiento:
                user.fecha_nacimiento = fecha_nacimiento
            if pais:
                user.pais = pais
            if departamento:
                user.departamento = departamento
            if perfil_foto:
                user.perfil_foto = perfil_foto
            if estado_psicologico:
                user.estado_psicologico = estado_psicologico
            user.save()
            return user
        return None

    @staticmethod
    def delete_user(user_id):
        """
        Delete a user by ID.
        """
        user = User.get_user_by_id(user_id)
        if user:
            user.delete()
            return True
        return False


# Payment Model
class Payment(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='payment')
    card_number = models.CharField(_('Número de Tarjeta'), max_length=16)
    expiration_date = models.CharField(_('Fecha de Expiración (MM/YY)'), max_length=5)
    cvv = models.CharField(_('CVV'), max_length=4)
    plan = models.CharField(
        _('Plan'), max_length=20, choices=[('basic', 'Básico'), ('premium', 'Premium')]
    )

    def __str__(self):
        return f"Pago de {self.user.email} - {self.plan}"

    # CRUD Operations for Payment
    @staticmethod
    def create_payment(user, card_number, expiration_date, cvv, plan):
        """
        Create new payment details for a user.
        """
        payment = Payment.objects.create(
            user=user,
            card_number=card_number,
            expiration_date=expiration_date,
            cvv=cvv,
            plan=plan,
        )
        return payment

    @staticmethod
    def get_payment_by_user(user_id):
        """
        Retrieve payment details by user ID.
        """
        try:
            payment = Payment.objects.get(user_id=user_id)
            return payment
        except Payment.DoesNotExist:
            return None

    @staticmethod
    def update_payment(user_id, card_number, expiration_date, cvv, plan):
        """
        Update payment details for a user.
        """
        payment = Payment.get_payment_by_user(user_id)
        if payment:
            payment.card_number = card_number
            payment.expiration_date = expiration_date
            payment.cvv = cvv
            payment.plan = plan
            payment.save()
            return payment
        return None

    @staticmethod
    def delete_payment(user_id):
        """
        Delete payment details for a user.
        """
        payment = Payment.get_payment_by_user(user_id)
        if payment:
            payment.delete()
            return True
        return False
