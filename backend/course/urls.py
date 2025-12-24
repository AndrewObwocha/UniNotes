from django.urls import path, URLPattern, URLResolver
from . import views

urlpatterns: list[URLPattern | URLResolver] = [
    path("", views.CourseList.as_view(), name="courses"),
]