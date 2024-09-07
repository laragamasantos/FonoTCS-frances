from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import Cases, Questions, Classes, Results, AppUser
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated	
from rest_framework_simplejwt.authentication import JWTAuthentication
from .validations import custom_validation
from collections import OrderedDict
from rest_framework_simplejwt.views import TokenObtainPairView

#Login User
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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
	
class CasesView(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def get(self, request):
		cases = Cases.objects.all()
		serializer = CasesSerializer(cases, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
class QuestionsView(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def get(self, request):
		questions = Questions.objects.all()
		serializer = QuestionsSerializer(questions, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	
class ResultsView(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		classes = Classes.objects.filter(teacherId_id=self.request.user.user_id)
		class_serializer = ClassesSerializer(classes, many=True)
		
		all_results = {}
		for classroom in class_serializer.data :
			class_results = Results.objects.filter(classId_id=classroom.get('classId'))
			res_serializer = ResultsSerializer(class_results, many=True)

			result_fields = []
			for result in res_serializer.data :
				student = AppUser.objects.get(user_id=result.get('studentId'))

				student_data = OrderedDict([
					('id', result.get('id')),
					('grade', result.get('grade')),
					('classId', result.get('classId')),
					('studentId', result.get('studentId')),
					('studentName', student.username) 
				])
				result_fields.append(student_data)

			all_results[classroom.get('classId')] = result_fields
		
		return Response(all_results, status=status.HTTP_200_OK)
	
class CreateClassView(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self, request):
		try:
			clean_data = request.data
			clean_data['teacherId'] = request.user.user_id
			serializer = ClassesSerializer(data=clean_data)
			if serializer.is_valid(raise_exception=True):
				serializer.create(clean_data)
		except Exception as e:
			print(e)
		return Response(status=status.HTTP_200_OK)
	
class SaveUserScore(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self, request):
		try:
			clean_data = request.data
			clean_data['studentId'] = request.user.user_id
			clean_data['classId'] = request.data['classId']
			clean_data['totalScore'] = request.data['totalScore']
			serializer = SaveScoreSerializer(data=clean_data)
			if serializer.is_valid(raise_exception=True):
				serializer.save_score(clean_data)
		except Exception as e:
			print(e)
		return Response(status=status.HTTP_200_OK)
	
class TeacherSpaceView(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]	
	def get(self, request):
		return Response(status=status.HTTP_200_OK)


