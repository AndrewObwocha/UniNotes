from django.shortcuts import render
from rest_framework import generics
from .serializers import CourseSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Course, Note

# Create your views here.
class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]


class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Note.objects.all()
        course = self.request.query_params.get('course')
        if course:
            queryset = queryset.filter(course=course)
        return queryset

    def perform_create(self, serializer):
        serializer.is_valid(raise_exception=True)
        serializer.save(author=self.request.user)


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)