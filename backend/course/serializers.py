from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ["id", "code", "title", "instructor", "created_at"]

    def validate_code(self, value):
        return value.upper()