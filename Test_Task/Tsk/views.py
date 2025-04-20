from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from Tsk.models import Image
from Tsk.serializers import ImageSerializer


class ImageViewSet(ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


def image_app(request):
    return render(request, 'images.html')


def forms_app(request):
    return render(request, 'forms.html')
