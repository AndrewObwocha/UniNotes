from django.db import models
from django.contrib.auth.models import User
from course.models import Course

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.title