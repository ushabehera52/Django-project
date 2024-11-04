from django.shortcuts import render
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *

class HelloWorldAPI(APIView):
    def get(self, request):
        # Create a response dictionary
        response_data = {
            "message": "Hello, World!"
        }
        # Return the response with status 200 OK
        return Response(response_data)
    
class UsersAPI(APIView):
    def get(self, request):
        users = User.objects.all()
        userSerializer = UserSerializer(users, many=True)  # Add `many=True`
        
        # Create a response dictionary
        response_data = {
            "user": userSerializer.data  # Access `.data` to get serialized JSON
        }
        
        # Return the response with status 200 OK
        return Response(response_data)

class CreateUserAPI(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the new user record
            return Response(serializer.data)
        return Response(serializer.errors)
    
class UserDetailAPI(APIView):
    def get(self, request, id):
        try:
            user = User.objects.get(id=id)  # Attempt to retrieve the user by ID
            userSerializer = UserSerializer(user)  # Serialize the user data
            return Response(userSerializer.data)  # Return the serialized data
        except User.DoesNotExist:
            return Response({"error": "User not found."})  # Handle user not found