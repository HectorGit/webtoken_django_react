from django.urls import path

from . import views

from django.views.generic import TemplateView #attempting to set up the default login to see its behaviour

urlpatterns = [
    path('fetch_user_data_insecure', views.fetch_user_data_insecure, name='fetch_user_data_insecure'),
    path('fetch_user_data_secure', views.fetch_user_data_secure, name='fetch_user_data_secure'), 
    path("<int:id>/", views.deskUserData, name="deskUserData"),

]
