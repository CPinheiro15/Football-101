from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('rules/', TemplateView.as_view(template_name='rules.html'), name='rules'),
    path('famous/', TemplateView.as_view(template_name='famous.html'), name='legends'),
    path('quiz/', TemplateView.as_view(template_name='quiz.html'), name='quiz'),
    path('construction/', TemplateView.as_view(template_name='construction.html'), name='construction'),
]

# Add this if you want to serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)