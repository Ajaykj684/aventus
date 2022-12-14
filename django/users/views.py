from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime, timedelta
from django.conf import settings
import jwt
from .models import users, Designation
from .serialiser import UserSerializer
from django.db.models import Q
from django.contrib.auth import authenticate


# Create your views here.

def getAccessToken(payload):
  return jwt.encode(
      {'exp': datetime.now() + timedelta(days=45), **payload},
      settings.SECRET_KEY
  )


@api_view(['POST'])
def userLogin(request):

  user = authenticate(
      username=request.POST['email'],
      password=request.POST['password'])
  if not user:
    return Response({'ok': 1, 'msg': 'Invalid email or password'}, status=400)
  else:
    token = getAccessToken({'id': user.id})
    return Response({'ok': 0, 'token': token})


@api_view(['POST'])
def addUser(request):

  name = request.data['name']
  email = request.data['email']
  phone = request.data['phone']
  address = request.data['address']
  designation = request.data['designation']

  try:
    users.objects.create(name=name, email=email, phone=phone, address=address,
                         designation=Designation.objects.get(designation=designation))
    return Response({'ok': 1, 'msg': 'user added !'}, status=200)
  except Exception as e:
    print(str(e))
    return Response({'ok': 0, 'msg': str(e)}, status=400)


@api_view(['PUT'])
def editUser(request):

  userId = request.data['id']
  name = request.data['name']
  email = request.data['email']
  phone = request.data['phone']
  address = request.data['address']
  designation = request.data['designation']

  try:
    users.objects.filter(id=userId).update(name=name, email=email, phone=phone, address=address,
                                           designation=Designation.objects.get(designation=designation))
    return Response({'ok': 1, 'msg': 'user updated !'}, status=200)
  except Exception as e:
    return Response({'ok': 0, 'msg': str(e)}, status=400)


@api_view(['GET'])
def getUsers(request):

  usersList = users.objects.all()
  serializeObj = UserSerializer(usersList, many=True)
  print(serializeObj.data)
  return Response({'ok': 1, 'data': serializeObj.data}, status=200)


@api_view(['GET'])
def searchUser(request):

  keyword = request.data['keyword']
  usersList = users.objects.filter(Q(name__icontains=keyword) | Q(email=keyword) | Q(designation=keyword))
  serializeObj = UserSerializer(usersList, many=True)
  return Response({'ok': 1, 'data': serializeObj.data}, status=200)


@api_view(['POST'])
def deleteUser(request, id):

  try:
    users.objects.filter(id=id).delete()
    return Response({'ok': 1, 'msg': 'Deleted'}, status=200)
  except Exception as e:
    print(str(e))
    return Response({'ok': 0, 'msg': str(e)}, status=400)
