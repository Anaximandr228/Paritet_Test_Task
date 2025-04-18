from django.db import models

# Модель Image
class Image(models.Model):
    image = models.TextField()
    description = models.CharField(max_length=255)