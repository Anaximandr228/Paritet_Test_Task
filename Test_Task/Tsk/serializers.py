from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from Tsk.models import Image


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'description']
        read_only_fields = ['id']
