from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserDetails
from .serializers import UserDetailsSerializer
from .utils import get_resources

class IndexView(APIView):
  def get(self, request):
    return Response("Home Page", status=status.HTTP_200_OK)

class StoreUserInfo(APIView):
    def get(self, request):
        email = request.GET.get("email") 
        dataExists = UserDetails.objects.filter(email=email).exists()
        return Response({"dataExists": dataExists})

    def post(self, request):
        email = request.data.get("email")
        if UserDetails.objects.filter(email=email).exists():
            user_detail = UserDetails.objects.get(email=email)
            serializer = UserDetailsSerializer(data=request.data, instance=user_detail)
            message = "User Data Updated!"
        else:
            serializer = UserDetailsSerializer(data=request.data)
            message = "User Data Created!"

        if serializer.is_valid():
            serializer.save()
            return Response({"success", message}, status=status.HTTP_200_OK)
        return Response(serializer.errors)

class ResourcesView(APIView):
    def get(self, request):
        role = request.GET.get("role")
        resources = get_resources(role)
        return Response(resources, status=status.HTTP_200_OK)