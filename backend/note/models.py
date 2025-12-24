from django.db import models
from django.conf import settings
from course.models import Course

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="notes")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='notes')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title