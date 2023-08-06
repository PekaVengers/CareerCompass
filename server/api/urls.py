from django.urls import path 
from .views import IndexView, ResourcesView, StoreUserInfo

app_name = "api"

urlpatterns = [
  path("", IndexView.as_view()),
  path("user-info", StoreUserInfo.as_view()),
  path("resources", ResourcesView.as_view()),
]