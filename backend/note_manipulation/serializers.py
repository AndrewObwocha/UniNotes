from rest_framework import serializers
from .models import Course, Note

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'code']
        extra_kwargs = {'title': {'read_only': True}}


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'author', 'course']
        extra_kwargs = {
            'author': {'read_only': True},
        }
