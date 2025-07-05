from rest_framework import serializers
from .models import Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ["id", "title", "code", "instructor"]
        extra_kwargs = {"title": {"read_only": True}}
