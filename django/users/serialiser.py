from rest_framework import serializers
from .models import users, Designation


class DesignationSerializer(serializers.ModelSerializer):
  class Meta:
    model = users
    fields = "__all__"


class UserSerializer(serializers.ModelSerializer):

  designation = serializers.StringRelatedField()

  class Meta:
    model = users
    fields = ('id', 'designation', 'name', 'email',
              'phone', 'address', 'photo', 'date_joined')
