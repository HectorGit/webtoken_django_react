from rest_framework import serializers
from .models import DeskUserData

class DeskUserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeskUserData
        fields = '__all__'