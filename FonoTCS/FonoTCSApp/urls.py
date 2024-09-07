from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('casemanager/savescore', views.SaveUserScore.as_view(), name='casemanager'),
    path('register/student', views.StudentUserRegister.as_view(), name='registerStudent'),
    path('register/teacher', views.TeacherUserRegister.as_view(), name='registerTeacher'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('cases', views.CasesView.as_view(), name='cases'),
    path('questions', views.QuestionsView.as_view(), name='questions'),
    path('results', views.ResultsView.as_view(), name='results'),
    path('create-class', views.CreateClassView.as_view(), name='createClass'),
]