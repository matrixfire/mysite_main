"""moviereviews URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from movie import views as movieViews

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', movieViews.home, name='home'),
    # path('about/', movieViews.about, name='about'),
    # path('signup/', movieViews.signup, name='signup'),
    path('', movieViews.home, name='home'),
    path('tools/', movieViews.tools, name='tools'),

    path('movie/', include('movie.urls', namespace='movie')),
    path('news/', include('news.urls', namespace='news')),
    path('accounts/', include('accounts.urls', namespace='accounts')),
    path('info/', include('info_app.urls', namespace='info_app')),

    path('conversation/', include('conversation.urls', namespace='conversation')),
    path('core/', include('core.urls', namespace='core')),
    path('dashboard/', include('dashboard.urls', namespace='dashboard')),
    path('item/', include('item.urls', namespace='item')),
]

# why? I should look it up
urlpatterns += static(settings.MEDIA_URL, 
    document_root=settings.MEDIA_ROOT)


# def make_path(app_name):
#     print(f"path('{app_name}/', include('{app_name}.urls', namespace='{app_name}')),")