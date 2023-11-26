from django.urls import path
from . import views


app_name = 'info_app' # while url name is info/
urlpatterns = [
    path("", views.index, name="index"),
    path("sections/<int:num>", views.section, name="section"),
    path("posts", views.posts, name="posts"),
]