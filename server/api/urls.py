from django.urls import path 
from .views import IndexView, ResourcesView, UserInfo, BookMarkView

app_name = "api"

urlpatterns = [
  path("", IndexView.as_view()),
  path("user-info", UserInfo.as_view()),
  path("resources", ResourcesView.as_view()),
  path("bookmarks", BookMarkView.as_view()),
]