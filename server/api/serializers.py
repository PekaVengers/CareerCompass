from rest_framework import serializers
from .models import UserDetails, RoadMap, Book, Youtube

class UserDetailsSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserDetails
    fields = "__all__"

class RoadMapSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoadMap
    fields = "__all__"

class BookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = "__all__"

class YoutubeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Youtube
    fields = "__all__"