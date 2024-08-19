from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import Cases, Questions, Student, Teacher, Classes

UserModel = get_user_model()

class StudentUserRegisterSerializer(serializers.ModelSerializer):
	gender = serializers.CharField(max_length=20, default='')
	age = serializers.IntegerField(default=0)
	highestDegree = serializers.CharField(max_length=50, default='')
	conclusionYear = serializers.IntegerField(default=0000)

	class Meta:
		model = UserModel
		fields = ['email', 'username', 'password', 'gender', 'age', 'highestDegree', 'conclusionYear']

	def create(self, validated_data):
		student_data = {
			'gender': validated_data.pop('gender', ''),
			'age': validated_data.pop('age', 0),
			'highestDegree': validated_data.pop('highestDegree', ''),
			'conclusionYear': validated_data.pop('conclusionYear', 0000),
		}

		user = UserModel.objects.create_user(
			email=validated_data['email'],
			username=validated_data['username'],
			password=validated_data['password'],
			isTeacher=False,
		)
		student = Student.objects.create(user=user, **student_data)
		return user
	
class TeacherUserRegisterSerializer(serializers.ModelSerializer):
	classId = serializers.CharField(max_length=50, default='')

	class Meta:
		model = UserModel
		fields = ['email', 'username', 'password', 'classId']

	def create(self, validated_data):
		user = UserModel.objects.create_user(
			email=validated_data['email'],
			username=validated_data['username'],
			password=validated_data['password'],
			isTeacher=True,
		)
		teacher = Teacher.objects.create(user=user)

		class_data = {
			'classId': validated_data.pop('classId', ''),
			'teacherId': teacher,
		}
		classes = Classes.objects.create(**class_data)

		return user
	
class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('user_id', 'email', 'username', 'isTeacher')

class CasesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Cases
		fields = '__all__'

class QuestionsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Questions
		fields = '__all__'
	
class ClassesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Classes
		fields = '__all__'

class SaveScoreSerializer(serializers.Serializer):
	studentId = serializers.IntegerField()
	classId = serializers.IntegerField()
	grade = serializers.FloatField()
	def save_score(self, clean_data):
		student = Student.objects.get(id=clean_data['studentId'])
		student.save()
		return student