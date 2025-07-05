from django.db import models

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100, default='Unknown Course')
    code = models.CharField(max_length=10, default='N/A')
    instructor = models.CharField(max_length=100, default='Unknown Instructor')

    def __str__(self):
        return self.title