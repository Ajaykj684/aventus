from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime, timedelta
from django.conf import settings
import jwt
from .models import users


# Create your views here.

def getAccessToken(payload):
  return jwt.encode(
      {'exp': datetime.now() + timedelta(days=45), **payload},
      settings.SECRET_KEY
  )


@api_view(['POST'])
def userLogin(request):
  return Response("hai im here")


@api_view(['POST'])
def addUser(request):
  print('111', request.POST.get('email'))
  email = request.POST['email']
  print(email)
  name = request.POST['name']
  email = request.POST['email']
  phone = request.POST['phone']
  password = request.POST['password']
  address = request.POST['address']
  designation = request.POST['designation']

  try:
    users.objects.create_user(name=name, email=email, phone=phone, password=password, address=address, designation=designation)
    return Response({"ok": 1, "msg": "user added succesfully"}, status=200)
  except Exception as e:
    return Response({"ok": 0, "msg": str(e)}, status=400)
