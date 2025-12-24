from django.urls import path, include, URLPattern, URLResolver

api_v1_patterns: list[URLPattern | URLResolver] = [
    path("auth/", include("authentication.urls")),
    path("courses/", include("course.urls")),
    path("notes/", include("note.urls")),
]