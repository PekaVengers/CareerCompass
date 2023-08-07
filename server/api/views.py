from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserDetails, RoadMap, Book, Youtube
from .serializers import UserDetailsSerializer, RoadMapSerializer, BookSerializer, YoutubeSerializer
from .utils import get_resources

class IndexView(APIView):
  def get(self, request):
    return Response("Home Page", status=status.HTTP_200_OK)

class UserInfo(APIView):
    def get(self, request):
        email = request.GET.get("email") 
        if UserDetails.objects.filter(email=email).exists():
            user_data = UserDetails.objects.get(email=email)
            serializer = UserDetailsSerializer(user_data)
            return Response(serializer.data)
        return Response({"error": "User Not Found"})

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
        resources = get_resources()
        return Response(resources, status=status.HTTP_200_OK)

class BookMarkView(APIView):

    def get(self, request):
        bookmark_type = request.GET.get("type")
        email = request.GET.get("email")
        user = UserDetails.objects.get(email=email)
        if bookmark_type == "roadmap":
            roadmaps = RoadMap.objects.filter(user=user)
            serializer = RoadMapSerializer(roadmaps, many=True)
        elif bookmark_type == "books":
            books = Book.objects.filter(user=user)
            serializer = BookSerializer(books, many=True)
        else:
            youtube = Youtube.objects.filter(user=user)
            serializer = YoutubeSerializer(youtube, many=True)

        return Response(serializer.data)

    def post(self, request):
        bookmark_type = request.data.get("type")
        email = request.data.get("email")
        user = UserDetails.objects.get(email=email)
        if bookmark_type == "roadmap":
            steps = request.data.get("roadmap")
            role = request.data.get("name")
            RoadMap.objects.create(role=role, step1=steps[0], step2=steps[1], step3=steps[2], step4=steps[3], step5=steps[4], user=user)
        else:
            name = request.data.get("name")
            link = request.data.get("link")
            description = request.data.get("description")
            if bookmark_type == "book":
                Book.objects.create(user=user, name=name, description=description, link=link)
            else:
                Youtube.objects.create(user=user, name=name, description=description, link=link)
        return Response({"success": "Bookmark Saved"})            

    def delete(self, request):
        bookmark_type = request.GET.get("type")
        name = request.GET.get("name")
        email = request.GET.get("email")
        user = UserDetails.objects.get(email=email)
        if bookmark_type == "roadmap":
            RoadMap.objects.filter(role=name, user=user).delete()
        elif bookmark_type == "book":
            Book.objects.filter(name=name, user=user).delete()
        else:
            Youtube.objects.filter(name=name, user=user).delete()
        return Response({"success": "Bookmark Deleted"})