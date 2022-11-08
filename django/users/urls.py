from django.urls import path
from . import views


urlpatterns = [

    path('user-login/', views.userLogin, name="user-login"),
    path('add-user/', views.addUser, name="addUser"),
    path('edit-user/', views.editUser, name="editUser"),
    path('get-users/', views.getUsers, name="getUsers"),
    path('search-user/', views.searchUser, name="searchUser"),
    path('delete-user/', views.deleteUser, name="deleteUser"),




]
