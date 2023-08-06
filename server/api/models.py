from django.db import models

# Create your models here.
class UserDetails(models.Model):
  email= models.EmailField(max_length=100)
  interest = models.TextField()
  strength = models.TextField()
  aspiration = models.TextField()
  education = models.CharField(max_length=100)

class RoadMap(models.Model):
  role = models.CharField(max_length=200)
  step1 = models.TextField()
  step2 = models.TextField()
  step3 = models.TextField()
  step4 = models.TextField()
  step5 = models.TextField()
  user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)

class Book(models.Model):
  name = models.TextField()
  description = models.TextField()
  link = models.TextField()
  user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)

class Youtube(models.Model):
  name = models.TextField()
  description = models.TextField()
  link = models.TextField()
  user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
