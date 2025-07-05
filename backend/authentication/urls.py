from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("", views.UserCreate.as_view(), name="registration"),
    path("token/get", TokenObtainPairView.as_view(), name="getToken"),
    path("token/refresh", TokenRefreshView.as_view(), name="refreshToken"),
]