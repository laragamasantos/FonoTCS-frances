from django.urls import path
from . import views

urlpatterns = [
    path('', views.UserRegister.as_view(), name='home'),
    path('case1', views.UserRegister.as_view(), name='case1'),
	path('case2', views.UserRegister.as_view(), name='case2'),
    path('casemanager', views.UserRegister.as_view(), name='casemanager'),
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
]