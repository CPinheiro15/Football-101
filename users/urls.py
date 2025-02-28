from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('profile/', views.profile_view, name='profile'),
    path('save-quiz-progress/', views.save_quiz_progress, name='save_quiz_progress'),
    path('get-quiz-progress/', views.get_quiz_progress, name='get_quiz_progress'),
    path('save-random-questions/', views.save_random_questions, name='save_random_questions'),
]