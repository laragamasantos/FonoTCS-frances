from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Cases, Questions, Student, Teacher, Classes, Results
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

UserModel = get_user_model()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email

        return token

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
		Classes.objects.create(**class_data)

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

	def create(self, clean_data):
		classId = clean_data['classId']
		teacherId = clean_data['teacherId']
		teacher = Teacher.objects.get(user_id=teacherId)

		Classes.objects.create(classId=classId, teacherId=teacher)

class ResultsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Results
		fields = '__all__'

class SaveScoreSerializer(serializers.Serializer):
	studentId = serializers.IntegerField()
	classId = serializers.CharField()
	totalScore = serializers.FloatField()

	def save_score(self, clean_data):
		studentId = clean_data['studentId']
		classId = clean_data['classId']
		totalScore = clean_data['totalScore']

		classObj = Classes.objects.get(classId=classId)
		student = Student.objects.get(user_id=studentId)
		Results.objects.create(grade=totalScore, classId=classObj, studentId=student)
		
