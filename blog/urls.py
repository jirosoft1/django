from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('pestsearch/', views.pestsearch, name='pestsearch'),
    
]