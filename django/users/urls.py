from django.urls import path
from . import views


urlpatterns = [

    path('user-login/', views.userLogin, name="user-login"),
    path('add-user/', views.addUser, name="addUser"),

]
