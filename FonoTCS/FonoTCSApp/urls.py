from django.urls import path
from . import views

urlpatterns = [
    path('', views.TesteView.as_view(), name='home'),
    path('case/:id', views.TesteView.as_view(), name='case'),
    path('casemanager/savescore', views.SaveUserScore.as_view(), name='casemanager'),
    path('user', views.UserView.as_view(), name='user'),
    path('register/student', views.StudentUserRegister.as_view(), name='registerStudent'),
    path('register/teacher', views.TeacherUserRegister.as_view(), name='registerTeacher'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
    path('cases', views.CasesView.as_view(), name='cases'),
    path('questions', views.QuestionsView.as_view(), name='questions'),
    path('results', views.ResultsView.as_view(), name='results'),
    path('create-class', views.CreateClassView.as_view(), name='createClass'),
    path('tutorial', views.TesteView.as_view(), name='tutorial'),
]