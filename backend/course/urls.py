from django.urls import path
from . import views


urlpatterns = [
    path("course/list", views.CourseList.as_view(), name="courses"),
]