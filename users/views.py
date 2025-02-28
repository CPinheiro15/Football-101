import json
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import QuizProgress


def register_view(request):
    if request.method == "POST":
        # Get form data
        name = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm-password")

        # Validate form data
        if password != confirm_password:
            messages.error(request, "Passwords do not match!")
            return render(request, "signup.html")

        # Check if user already exists
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already registered!")
            return render(request, "signup.html")

        # Create user
        user = User.objects.create_user(
            username=email,  # Using email as username
            email=email,
            password=password,
            first_name=name,
        )

        # Log the user in
        login(request, user)
        messages.success(request, f"Account created for {name}!")
        return redirect("home")

    return render(request, "signup.html")


def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        # Try to find user by email
        try:
            user = User.objects.get(email=email)
            # Authenticate with username (which is email in our case)
            user = authenticate(request, username=user.username, password=password)

            if user is not None:
                login(request, user)
                # Removed success message
                return redirect("home")
            else:
                messages.error(request, "Invalid password!")
        except User.DoesNotExist:
            messages.error(request, "Email not registered!")

    return render(request, "login.html")


def logout_view(request):
    logout(request)
    # Removed success message
    return redirect("home")


@login_required
def profile_view(request):
    if request.method == "POST" and "change_password" in request.POST:
        current_password = request.POST.get("current_password")
        new_password = request.POST.get("new_password")
        confirm_password = request.POST.get("confirm_password")

        if not request.user.check_password(current_password):
            messages.error(request, "Current password is incorrect.")
        elif new_password == current_password:
            messages.error(
                request, "New password cannot be the same as your current password."
            )
        elif new_password != confirm_password:
            messages.error(request, "New passwords do not match.")
        else:
            request.user.set_password(new_password)
            request.user.save()
            # Update the session so the user doesn't get logged out
            update_session_auth_hash(request, request.user)
            messages.success(request, "Your password has been updated successfully.")

    return render(request, "profile.html")


@login_required
@csrf_exempt
def save_quiz_progress(request):
    if request.method == "POST":
        data = json.loads(request.body)
        category = data.get("category")
        current_question = data.get("currentQuestionIndex")
        score = data.get("score")
        time_left = data.get("timeLeft")
        attempts = data.get("attempts")
        current_question_answered = data.get("currentQuestionAnswered", False)
        is_completed = data.get("isCompleted", False)
        random_questions = data.get("randomQuestions")

        # Handle initial random question setup
        is_initial_random = data.get("isInitialRandom", False)

        # Find existing progress or create new
        progress, created = QuizProgress.objects.get_or_create(
            user=request.user,
            category=category,
            defaults={
                "current_question": current_question,
                "score": score,
                "time_left": time_left,
                "attempts": attempts,
                "current_question_answered": current_question_answered,
                "is_completed": is_completed,
                "random_questions": random_questions,
            },
        )

        # Update if existing
        if not created:
            progress.current_question = current_question
            progress.score = score
            progress.time_left = time_left
            progress.attempts = attempts
            progress.current_question_answered = current_question_answered
            progress.is_completed = is_completed

            # Only update random questions if provided or if it's initial setup
            if random_questions or is_initial_random:
                progress.random_questions = random_questions

            progress.save()

        return JsonResponse({"success": True})

    return JsonResponse({"success": False, "error": "Invalid request method"})


@login_required
@csrf_exempt
def save_random_questions(request):
    """Special endpoint just for saving the initial random questions"""
    if request.method == "POST":
        data = json.loads(request.body)
        category = data.get("category")
        random_questions = data.get("randomQuestions")

        # Find existing progress or create new
        progress, created = QuizProgress.objects.get_or_create(
            user=request.user,
            category=category,
            defaults={
                "random_questions": random_questions,
                "current_question": 0,
                "score": 0,
                "time_left": 15,
                "attempts": 0,
            },
        )

        # Update if existing but not active
        if not created and progress.is_completed:
            progress.random_questions = random_questions
            progress.current_question = 0
            progress.score = 0
            progress.time_left = 15
            progress.attempts = 0
            progress.is_completed = False
            progress.save()

        return JsonResponse({"success": True})

    return JsonResponse({"success": False, "error": "Invalid request method"})


@login_required
def get_quiz_progress(request):
    category = request.GET.get("category")

    try:
        progress = QuizProgress.objects.get(user=request.user, category=category)

        # Don't return completed quizzes
        if progress.is_completed:
            return JsonResponse({"success": True, "hasProgress": False})

        response_data = {
            "success": True,
            "hasProgress": True,
            "currentQuestionIndex": progress.current_question,
            "score": progress.score,
            "timeLeft": progress.time_left,
            "attempts": progress.attempts,
            "currentQuestionAnswered": progress.current_question_answered,
        }

        # Include random questions if available
        if progress.random_questions and category == "random":
            response_data["randomQuestions"] = progress.random_questions

        return JsonResponse(response_data)
    except QuizProgress.DoesNotExist:
        return JsonResponse({"success": True, "hasProgress": False})
