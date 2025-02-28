from django.db import models
from django.contrib.auth.models import User

class QuizProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=50)
    current_question = models.IntegerField(default=0)
    score = models.IntegerField(default=0)
    time_left = models.IntegerField(default=15)
    attempts = models.IntegerField(default=0)
    is_completed = models.BooleanField(default=False)
    random_questions = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    current_question_answered = models.BooleanField(default=False)
    
    class Meta:
        unique_together = ('user', 'category')
    
    def __str__(self):
        return f"{self.user.username}'s progress on {self.category}"