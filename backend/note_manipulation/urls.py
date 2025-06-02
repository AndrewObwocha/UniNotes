from django.urls import path
from . import views

urlpatterns = [
    path('courses/list', views.CourseList.as_view(), name='courses'),
    path('notes/create_list', views.NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>', views.NoteDelete.as_view(), name='delete-note'),
]