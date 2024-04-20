from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Permission
from django.contrib.auth.models import Group

class AppUserManager(BaseUserManager):
	def create_user(self, email, username, password=None, **extra_fields):
		if not email:
			raise ValueError('An email is required.')
		if not username:
			raise ValueError('A username is required.')
		email = self.normalize_email(email)
		user = self.model(email=email, username=username, **extra_fields)
		user.set_password(password)
		user.save(using=self._db)
		return user
	""" def create_superuser(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.create_user(email, password)
		user.is_superuser = True
		user.save()
		return user """


class AppUser(AbstractBaseUser, PermissionsMixin):
	user_id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50)
	isTeacher = models.BooleanField(default=False)
	gender = models.CharField(max_length=20, default='')
	age = models.IntegerField(default=0)
	highestDegree = models.CharField(max_length=50, default='')
	conclusionYear = models.IntegerField(default=0000)

	groups = models.ManyToManyField(Group, related_name='user_groups_app', blank=True)
	user_permissions = models.ManyToManyField(Permission, related_name='user_permissions_app', blank=True)  
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']
	objects = AppUserManager()
	def __str__(self):
		return self.username
	
class Cases(models.Model):
	id = models.AutoField(primary_key=True)
	description = models.TextField()

class Questions(models.Model):
	id = models.AutoField(primary_key=True)
	case_id = models.ForeignKey(Cases, on_delete=models.CASCADE)
	if_situation = models.TextField()
	and_situation = models.TextField()
	image = models.FileField(upload_to='images/', blank=True, null=True)
	option_a_weight = models.IntegerField()
	option_b_weight = models.IntegerField()
	option_c_weight = models.IntegerField()
	option_d_weight = models.IntegerField()
	option_e_weight = models.IntegerField()
