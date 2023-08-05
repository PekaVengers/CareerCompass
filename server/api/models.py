from django.db import models

# Create your models here.
class UserDetails(models.Model):
  email= models.EmailField(max_length=100)
  interest = models.TextField()
  strength = models.TextField()
  aspiration = models.TextField()
  education = models.CharField(max_length=100)