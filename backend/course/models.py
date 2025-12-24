from django.db import models

class Course(models.Model):
    code = models.CharField(max_length=10, unique=True) 
    title = models.CharField(max_length=100)
    instructor = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['code'] 

    def __str__(self):
        return f"{self.code}: {self.title}"