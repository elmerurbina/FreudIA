from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),        # Admin site URL pattern
    path('', include('general.urls')),       # Root URL pattern for general app
]
