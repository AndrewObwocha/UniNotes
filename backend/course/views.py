from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer
from rest_framework.permissions import AllowAny


# Create your views here.
class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]