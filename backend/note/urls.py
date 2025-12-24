from django.urls import path, URLPattern, URLResolver
from . import views

urlpatterns: list[URLPattern | URLResolver] = [
    path("", views.NoteListCreate.as_view(), name="note-list"),
    path("<int:pk>/", views.NoteDelete.as_view(), name="note-detail"),
]