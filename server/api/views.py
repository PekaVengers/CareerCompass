from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserDetails
from .serializers import UserDetailsSerializer

class IndexView(APIView):
  def get(self, request):
    return Response("Home Page", status=status.HTTP_200_OK)

class StoreUserInfo(APIView):
    def post(self, request):
        email = request.data.get("email")
        if UserDetails.objects.filter(username=username).exits():
            return Response({"success", "user exists"}, status=status.HTTP_200_OK)
        serializer = UserDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success", "user data created"}, status=status.HTTP_200_OK)
        return Response(serializer.errors)
