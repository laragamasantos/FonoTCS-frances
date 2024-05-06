from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

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

class AppUser(AbstractBaseUser, PermissionsMixin):
	user_id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50)
	isTeacher = models.BooleanField(default=False)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']
	objects = AppUserManager()
	def __str__(self):
		return self.username
	
class Student(models.Model):
	user = models.OneToOneField(AppUser, on_delete=models.CASCADE, primary_key=True)
	gender = models.CharField(max_length=20, default='')
	age = models.IntegerField(default=0)
	highestDegree = models.CharField(max_length=50, default='')
	conclusionYear = models.IntegerField(default=0000)

class Teacher(models.Model):
	user = models.OneToOneField(AppUser, on_delete=models.CASCADE, primary_key=True)

class Classes(models.Model):
	classId = models.CharField(primary_key=True, max_length=50, default='')
	teacherId = models.ForeignKey(Teacher, on_delete=models.CASCADE)

class Results(models.Model):
	class Meta:
		unique_together = (('classId', 'studentId'),)

	classId = models.ForeignKey(Classes, on_delete=models.CASCADE)
	studentId = models.ForeignKey(Student, on_delete=models.CASCADE)
	grade = models.FloatField(default=0.0)
	
class Cases(models.Model):
	id = models.AutoField(primary_key=True)
	description = models.TextField()
	image = models.FileField(upload_to='', blank=True, null=True)

class Questions(models.Model):
	id = models.AutoField(primary_key=True)
	case_id = models.ForeignKey(Cases, on_delete=models.CASCADE)
	if_situation = models.TextField()
	and_situation = models.TextField()
	option_a_weight = models.FloatField()
	option_b_weight = models.FloatField()
	option_c_weight = models.FloatField()
	option_d_weight = models.FloatField()
	option_e_weight = models.FloatField()
