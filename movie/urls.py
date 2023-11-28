from django.urls import path
from . import views

app_name = 'movie'
urlpatterns = [
    path('about', views.about, name='about'),
    path('signup', views.signup, name='signup'),
    path('<int:movie_id>', views.detail, name='detail'),
    path('<int:movie_id>/create', views.createreview,
         name='createreview'),
    path('review/<int:review_id>', views.updatereview,
         name='updatereview'),
    path('review/<int:review_id>/delete', views.deletereview,
         name='deletereview'),
]