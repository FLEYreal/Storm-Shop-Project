from django.contrib import admin
from django.urls import path, include, re_path
from finances_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('action/', query_handler),
    path('action_time/', query_handler_time),    
    path(r'auth/', include('djoser.urls')),
    re_path(r'auth/', include('djoser.urls.authtoken')),
] 
