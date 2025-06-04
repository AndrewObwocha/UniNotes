from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100, default='Unknown Course')
    code = models.CharField(max_length=10, default='N/A')
    instructor = models.CharField(max_length=100, default='Unknown Instructor')

    def __str__(self):
        return self.title


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.title