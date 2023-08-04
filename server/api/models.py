from django.db import models

# Create your models here.
class UserDetails(models.Model):
  email= models.EmailField(max_length=100)
  interests = models.TextField()
  strengths = models.TextField()
  Aspiration = models.TextField()
  location = models.CharField()