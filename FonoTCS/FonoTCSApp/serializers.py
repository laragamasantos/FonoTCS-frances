from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, validated_data):
		user = UserModel.objects.create_user(
			email=validated_data['email'],
			username=validated_data['username'],
			password=validated_data['password'],
			isTeacher=validated_data.get('isTeacher', False),
			gender=validated_data.get('gender', ''),
			age=validated_data.get('age', 0),
			highestDegree=validated_data.get('highestDegree', ''),
			conclusionYear=validated_data.get('conclusionYear', 0)
		)
		return user

class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')