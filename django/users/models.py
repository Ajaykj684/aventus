from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.


class MyAccountManager(BaseUserManager):
  def create_user(self, name, email, password=None):
    if not email:
      raise ValueError('user must have an email address')

    user = self.model(
        email=self.normalize_email(email),
        name=name,

    )
    user.is_active = True
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, name, email, password):
    user = self.create_user(
        email=self.normalize_email(email),
        password=password,
        name=name,
    )
    user.is_admin = True
    user.is_active = True
    user.is_staff = True
    user.is_superadmin = True
    user.save(using=self._db)
    return user


class Designation(models.Model):

  STATUS = (
      ('QA Lead', 'QA Lead'),
      ('Engineer', 'Engineer'),
      ('Developer', 'Developer'),
      ('Admin', 'Admin'),
      ('QA tester', 'QA tester'),
  )
  designation = models.CharField(max_length=10, choices=STATUS, default='bangalore')

  def __str__(self):
    return self.designation


class users(AbstractBaseUser):
  name = models.CharField(max_length=50)
  email = models.EmailField(max_length=100, unique=True)
  phone = models.CharField(max_length=50, null=True, blank=True)
  password = models.CharField(max_length=50, null=True, blank=True)
  address = models.TextField()
  photo = models.ImageField(upload_to='user-profile/', blank=True)
  designation = models.ForeignKey(Designation, on_delete=models.CASCADE)
  date_joined = models.DateTimeField(auto_now_add=True)
  is_admin = models.BooleanField(default=False)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'email']

  objects = MyAccountManager()

  class Meta:
    verbose_name = 'user'
    verbose_name_plural = 'users'

  def __str__(self):
    return self.email
