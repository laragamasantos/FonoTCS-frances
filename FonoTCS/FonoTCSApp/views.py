from django.contrib.auth import login, logout, authenticate
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StudentUserRegisterSerializer, TeacherUserRegisterSerializer, UserLoginSerializer, UserSerializer, CasesSerializer, QuestionsSerializer
from .models import Cases, Questions
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated	
from .validations import custom_validation, validate_email, validate_password


class StudentUserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = StudentUserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)

class TeacherUserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = TeacherUserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			print(user)
			login(request, user)
			print('login')
			print(request.user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	def get(self, request):
		print("UserView" +  str(self.request.user))
		serializer = UserSerializer(instance=request.user)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
class CasesView(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def get(self, request):
		cases = Cases.objects.all()
		serializer = CasesSerializer(cases, many=True)
		print('teste')
		try:
			print(request.session)
		except Exception as e:
			print(e)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
class QuestionsView(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def get(self, request):
		questions = Questions.objects.all()
		serializer = QuestionsSerializer(questions, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
class SaveUserScore(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		try:
			print(request.user)
			clean_data = request.data
			clean_data['studentId'] = request.user.id
			clean_data['classId'] = 1
			serializer = SaveScoreSerializer(data=clean_data)
			if serializer.is_valid(raise_exception=True):
				result = serializer.save_score(request.totalScore)
		except Exception as e:
			print(e)
		return Response(status=status.HTTP_200_OK)
	
class TesteView(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def get(self, request):
		return Response(status=status.HTTP_200_OK)

