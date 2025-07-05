from django.urls import path
from . import views

urlpatterns = [
    path("note/createAndList", views.NoteListCreate.as_view(), name="noteList"),
    path("note/delete/<int:pk>", views.NoteDelete.as_view(), name="deleteNote"),
]