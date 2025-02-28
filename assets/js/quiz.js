/* jshint esversion: 6 */

// Quiz Data with Questions and Answers
const quizData = {
  worldCup: [
    {
      question: "Which country won the 2022 FIFA World Cup?",
      options: ["Brazil", "France", "Argentina", "Croatia"],
      answer: "Argentina",
    },
    {
      question: "Who was awarded the Golden Boot in the 2022 World Cup?",
      options: [
        "Lionel Messi",
        "Kylian Mbappé",
        "Olivier Giroud",
        "Julian Alvarez",
      ],
      answer: "Kylian Mbappé",
    },
    {
      question: "Which nation made its World Cup debut in 2022?",
      options: ["Qatar", "Iceland", "Panama", "Canada"],
      answer: "Qatar",
    },
    {
      question:
        "Who holds the record for the most goals in a single World Cup tournament?",
      options: ["Just Fontaine", "Ronaldo Nazário", "Miroslav Klose", "Pelé"],
      answer: "Just Fontaine",
    },
    {
      question: "How many goals did Lionel Messi score in the 2022 World Cup?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question:
        "Which team eliminated Brazil in the 2022 World Cup quarter-finals?",
      options: ["Croatia", "Argentina", "France", "Morocco"],
      answer: "Croatia",
    },
    {
      question:
        "What was the final score of the 2022 World Cup final after extra time?",
      options: ["3–3", "2–2", "4–4", "1–1"],
      answer: "3–3",
    },
    {
      question:
        "Which country has the most World Cup appearances without winning?",
      options: ["Mexico", "Netherlands", "Portugal", "Sweden"],
      answer: "Mexico",
    },
    {
      question: "Who is the only player to score in four different World Cups?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Miroslav Klose", "Pelé"],
      answer: "Miroslav Klose",
    },
    {
      question: "In which year did the first FIFA World Cup take place?",
      options: ["1928", "1930", "1934", "1938"],
      answer: "1930",
    },
  ],
  premierLeague: [
    {
      question: "Who scored the fastest hat-trick in Premier League history?",
      options: ["Alan Shearer", "Sadio Mané", "Mohamed Salah", "Sergio Agüero"],
      answer: "Sadio Mané",
    },
    {
      question:
        "Which club holds the record for the longest unbeaten run in Premier League history?",
      options: ["Arsenal", "Manchester United", "Liverpool", "Chelsea"],
      answer: "Arsenal",
    },
    {
      question:
        "Who has scored the most goals in a single Premier League season?",
      options: [
        "Mohamed Salah",
        "Alan Shearer",
        "Harry Kane",
        "Erling Haaland",
      ],
      answer: "Erling Haaland",
    },
    {
      question: "Who was the first manager to win the Premier League?",
      options: [
        "Alex Ferguson",
        "Arsène Wenger",
        "Kenny Dalglish",
        "Jose Mourinho",
      ],
      answer: "Alex Ferguson",
    },
    {
      question: "Which player has the most Premier League appearances?",
      options: ["Ryan Giggs", "Gareth Barry", "James Milner", "Frank Lampard"],
      answer: "Gareth Barry",
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: ["Manchester City", "Chelsea", "Manchester United", "Liverpool"],
      answer: "Manchester United",
    },
    {
      question: "What is the highest-scoring match in Premier League history?",
      options: ["9-0", "7-4", "7-3", "8-2"],
      answer: "7-4",
    },
    {
      question: "Who scored the first-ever Premier League goal?",
      options: ["Eric Cantona", "Mark Hughes", "Brian Deane", "Ian Wright"],
      answer: "Brian Deane",
    },
    {
      question: "Which goalkeeper has the most Premier League clean sheets?",
      options: [
        "Petr Čech",
        "David Seaman",
        "Peter Schmeichel",
        "Alisson Becker",
      ],
      answer: "Petr Čech",
    },
    {
      question: "Which team won the Premier League in the 2021/22 season?",
      options: ["Liverpool", "Chelsea", "Manchester City", "Arsenal"],
      answer: "Manchester City",
    },
  ],
  championsLeague: [
    {
      question: "Which team has won the most Champions League titles?",
      options: ["Real Madrid", "AC Milan", "Barcelona", "Bayern Munich"],
      answer: "Real Madrid",
    },
    {
      question: "Which team won the 2020 Champions League final?",
      options: ["PSG", "Bayern Munich", "Liverpool", "Chelsea"],
      answer: "Bayern Munich",
    },
    {
      question: "Who is the all-time top scorer in Champions League history?",
      options: [
        "Cristiano Ronaldo",
        "Lionel Messi",
        "Robert Lewandowski",
        "Karim Benzema",
      ],
      answer: "Cristiano Ronaldo",
    },
    {
      question:
        "Which country has produced the most Champions League-winning clubs?",
      options: ["Spain", "England", "Italy", "Germany"],
      answer: "Spain",
    },
    {
      question:
        "Who scored the decisive goal in the 1999 final for Manchester United?",
      options: [
        "Teddy Sheringham",
        "Ole Gunnar Solskjær",
        "Ryan Giggs",
        "Roy Keane",
      ],
      answer: "Ole Gunnar Solskjær",
    },
    {
      question: "Which composer inspired the Champions League anthem?",
      options: ["Mozart", "Handel", "Beethoven", "Bach"],
      answer: "Handel",
    },
    {
      question:
        "Which player has the most assists in Champions League history?",
      options: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Xavi Hernandez",
        "Thomas Müller",
      ],
      answer: "Cristiano Ronaldo",
    },
    {
      question: "Which was the first English club to win the Champions League?",
      options: [
        "Manchester United",
        "Nottingham Forest",
        "Liverpool",
        "Chelsea",
      ],
      answer: "Manchester United",
    },
    {
      question:
        "What was the scoreline of the famous Liverpool comeback against AC Milan in 2005?",
      options: ["3-2", "3-3 (won on penalties)", "2-2", "4-3"],
      answer: "3-3 (won on penalties)",
    },
    {
      question:
        "Who was the youngest player to score in a Champions League final?",
      options: [
        "Lionel Messi",
        "Ansu Fati",
        "Patrick Kluivert",
        "Kylian Mbappé",
      ],
      answer: "Patrick Kluivert",
    },
  ],
  iconicPlayers: [
    {
      question: "Which player is known as 'The Egyptian King'?",
      options: ["Mohamed Salah", "Sadio Mane", "Riyad Mahrez", "Hakim Ziyech"],
      answer: "Mohamed Salah",
    },
    {
      question: "Which player is nicknamed 'CR7'?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Wayne Rooney"],
      answer: "Cristiano Ronaldo",
    },
    {
      question: "Who won the Ballon d'Or in 2021?",
      options: [
        "Lionel Messi",
        "Robert Lewandowski",
        "Cristiano Ronaldo",
        "Luka Modric",
      ],
      answer: "Lionel Messi",
    },
    {
      question: "Which player has the most goals in football history?",
      options: ["Pelé", "Cristiano Ronaldo", "Lionel Messi", "Josef Bican"],
      answer: "Cristiano Ronaldo",
    },
    {
      question: "Who is the youngest player to score in a World Cup final?",
      options: ["Pelé", "Kylian Mbappé", "Michael Owen", "Diego Maradona"],
      answer: "Pelé",
    },
    {
      question: "Which player has the most Ballon d'Or awards?",
      options: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Johan Cruyff",
        "Marco van Basten",
      ],
      answer: "Lionel Messi",
    },
    {
      question: "Who scored the 'Hand of God' goal?",
      options: [
        "Diego Maradona",
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Zinedine Zidane",
      ],
      answer: "Diego Maradona",
    },
    {
      question: "Which player is nicknamed 'The Phenomenon'?",
      options: ["Ronaldo Nazário", "Ronaldinho", "Neymar", "Cafu"],
      answer: "Ronaldo Nazário",
    },
    {
      question:
        "Which player scored the fastest hat-trick in Premier League history?",
      options: ["Alan Shearer", "Sadio Mane", "Mohamed Salah", "Sergio Aguero"],
      answer: "Sadio Mane",
    },
    {
      question: "Which legendary goalkeeper was nicknamed 'The Black Spider'?",
      options: [
        "Lev Yashin",
        "Gianluigi Buffon",
        "Oliver Kahn",
        "Iker Casillas",
      ],
      answer: "Lev Yashin",
    },
  ],
  footballRules: [
    {
      question:
        "How many players are allowed on the field per team during a match?",
      options: ["10", "11", "12", "13"],
      answer: "11",
    },
    {
      question:
        "What is the duration of a standard professional football match?",
      options: ["90 minutes", "100 minutes", "80 minutes", "120 minutes"],
      answer: "90 minutes",
    },
    {
      question:
        "What happens if a player receives two yellow cards in a match?",
      options: [
        "Red card",
        "Suspension for next game",
        "Nothing",
        "Free kick to the opponent",
      ],
      answer: "Red card",
    },
    {
      question: "How long is each half in extra time?",
      options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"],
      answer: "15 minutes",
    },
    {
      question:
        "What is the minimum number of players a team must have to continue a match?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Which of the following results in a penalty kick?",
      options: [
        "Foul in the penalty area",
        "Offside",
        "Throw-in violation",
        "Dangerous play",
      ],
      answer: "Foul in the penalty area",
    },
    {
      question: "What does VAR stand for in football?",
      options: [
        "Video Assistant Referee",
        "Virtual Action Replay",
        "Verified Accurate Replay",
        "None of the above",
      ],
      answer: "Video Assistant Referee",
    },
    {
      question: "What is the radius of the center circle on a football pitch?",
      options: ["8 yards", "9.15 yards", "10 yards", "12 yards"],
      answer: "9.15 yards",
    },
    {
      question:
        "What action is taken when a goalkeeper holds the ball for more than 6 seconds?",
      options: ["Free kick", "Penalty kick", "Throw-in", "Yellow card"],
      answer: "Free kick",
    },
    {
      question:
        "How many substitutions are allowed in a professional match post-COVID-19 rule changes?",
      options: ["3", "4", "5", "Unlimited"],
      answer: "5",
    },
  ],
};

let currentCategory = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let attempts = 0;
let categoryName = "";
let currentQuestionAnswered = false;

// DOM Elements
const categoryButtons = document.querySelectorAll(".category-btn");
const quizSection = document.getElementById("quiz-section");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("time");
const nextBtn = document.getElementById("next-btn");
const resultsSection = document.getElementById("results-section");
const scoreEl = document.getElementById("score");
const questionCounter = document.getElementById("question-counter");
const restartBtn = document.getElementById("restart-btn");
const tryAgainMsg = document.getElementById("try-again-msg");
const pageTitleSection = document.getElementById("football-quiz");
const feedbackMessage = document.getElementById("feedback-message");
const gifContainer = document.getElementById("gif-container");

// Check if the user is logged in
const isLoggedIn = document.querySelector("[data-user-logged-in]") !== null;

// Event Listener for Category Buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    categoryName = category; // Store the category name

    if (category === "random") {
      checkProgress("random");
    } else {
      checkProgress(category);
    }
  });
});

// Check for existing progress
function checkProgress(category) {
  if (!isLoggedIn) {
    // If not logged in, start quiz normally
    if (category === "random") {
      loadRandomCategoryQuestions();
    } else {
      startQuiz(category);
    }
    return;
  }

  // If logged in, check for saved progress
  fetch(`/users/get-quiz-progress/?category=${category}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Saved Progress Data:", data); // Added logging

      if (data.success && data.hasProgress) {
        // Ask user if they want to continue
        if (confirm("Would you like to continue your previous quiz?")) {
          if (category === "random") {
            // For random category, we need to use saved questions if available
            if (data.randomQuestions) {
              try {
                // Parse the saved questions
                currentCategory = JSON.parse(data.randomQuestions);
                categoryName = category;
                currentQuestionIndex = data.currentQuestionIndex;
                score = data.score;
                timeLeft = data.timeLeft;
                attempts = data.attempts;

                // Explicitly set the currentQuestionAnswered flag
                currentQuestionAnswered = data.currentQuestionAnswered || false;
                console.log(
                  "Restored currentQuestionAnswered:",
                  currentQuestionAnswered
                ); // Added logging

                initializeQuiz();
              } catch (e) {
                console.error("Error parsing saved random questions:", e);
                loadRandomCategoryQuestions(); // Fallback
              }
            } else {
              // If no saved questions (older sessions), just start new
              loadRandomCategoryQuestions();
            }
          } else {
            startQuiz(category);
            // Restore progress
            currentQuestionIndex = data.currentQuestionIndex;
            score = data.score;
            timeLeft = data.timeLeft;
            attempts = data.attempts;

            // Explicitly set the currentQuestionAnswered flag
            currentQuestionAnswered = data.currentQuestionAnswered || false;
            console.log(
              "Restored currentQuestionAnswered:",
              currentQuestionAnswered
            ); // Added logging

            loadQuestion();
          }
        } else {
          // Start fresh
          if (category === "random") {
            loadRandomCategoryQuestions();
          } else {
            startQuiz(category);
          }
        }
      } else {
        // No progress or completed quiz, start fresh
        if (category === "random") {
          loadRandomCategoryQuestions();
        } else {
          startQuiz(category);
        }
      }
    })
    .catch((error) => {
      console.error("Error checking progress:", error);
      // Fall back to normal start
      if (category === "random") {
        loadRandomCategoryQuestions();
      } else {
        startQuiz(category);
      }
    });
}

// Also modify the loadRandomCategoryQuestions function to save the questions:
function loadRandomCategoryQuestions() {
  const allQuestions = Object.values(quizData).flat();
  shuffleArray(allQuestions);
  currentCategory = allQuestions.slice(0, 10);
  categoryName = "random";

  // Save these random questions when first created
  if (isLoggedIn) {
    const progressData = {
      category: "random",
      randomQuestions: JSON.stringify(currentCategory),
      isInitialRandom: true,
    };

    fetch("/users/save-random-questions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify(progressData),
    }).catch((error) => console.error("Error saving random questions:", error));
  }

  initializeQuiz();
}

// And update the saveProgress function to include the questions for random category:
function saveProgress(isCompleted = false) {
  if (!isLoggedIn) return; // Don't save if not logged in

  const progressData = {
    category: categoryName,
    currentQuestionIndex: currentQuestionIndex,
    score: score,
    timeLeft: timeLeft,
    attempts: attempts,
    currentQuestionAnswered: currentQuestionAnswered,
    isCompleted: isCompleted,
  };

  // Include the questions if it's a random category
  if (categoryName === "random") {
    progressData.randomQuestions = JSON.stringify(currentCategory);
  }

  fetch("/users/save-quiz-progress/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body: JSON.stringify(progressData),
  }).catch((error) => console.error("Error saving progress:", error));
}

// Helper to get CSRF token
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// Start Quiz
function startQuiz(category) {
  currentCategory = [...quizData[category]];
  initializeQuiz();
}

// Load Random Questions
function loadRandomCategoryQuestions() {
  const allQuestions = Object.values(quizData).flat();
  shuffleArray(allQuestions);
  currentCategory = allQuestions.slice(0, 10);
  initializeQuiz();
}

// Initialize Quiz
function initializeQuiz() {
  if (currentQuestionIndex === 0) {
    score = 0;
  }
  pageTitleSection.style.display = "none";
  document.getElementById("category-section").style.display = "none";
  quizSection.style.display = "block";
  loadQuestion();
}

// Load Question
function loadQuestion() {
  console.log(
    "Loading Question - Current Question Answered:",
    currentQuestionAnswered
  );
  console.log("Current Attempts:", attempts);

  resetState();
  const currentQuestion = currentCategory[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // If attempts have reached 2, automatically show correct answer and prepare for next question
  if (attempts >= 2) {
    console.log("Attempts maxed out, showing correct answer");
    currentQuestionAnswered = true;
    nextBtn.style.display = "block";

    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");

      if (option === currentQuestion.answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("disabled");
      }
      button.disabled = true;
      optionsEl.appendChild(button);
    });
  } else {
    // Normal question loading logic
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");

      if (currentQuestionAnswered && option === currentQuestion.answer) {
        button.classList.add("correct");
        button.disabled = true;
        nextBtn.style.display = "block";
      } else if (currentQuestionAnswered) {
        button.disabled = true;
      } else {
        button.addEventListener("click", () =>
          selectAnswer(button, currentQuestion.answer)
        );
      }

      optionsEl.appendChild(button);
    });
  }

  updateQuestionCounter();

  // Only start timer if question hasn't been answered and attempts are less than 2
  if (!currentQuestionAnswered && attempts < 2) {
    startTimer();
  }

  // Save progress when loading a new question
  saveProgress();
}

// Reset State
function resetState() {
  clearInterval(timer);
  // Only update the display, don't reset the timeLeft variable here
  timerEl.textContent = timeLeft;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  // Don't reset attempts here, we want to keep track of them
}

// Timer Function
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    // Save progress every 5 seconds
    if (timeLeft % 5 === 0) {
      saveProgress();
    }
    if (timeLeft === 0) {
      clearInterval(timer);
      highlightCorrectAnswer();
    }
  }, 1000);
}

// Highlight Correct Answer
function highlightCorrectAnswer() {
  Array.from(optionsEl.children).forEach((button) => {
    if (button.textContent === currentCategory[currentQuestionIndex].answer) {
      button.classList.add("correct");
    } else {
      button.classList.add("disabled");
    }
  });
  nextBtn.style.display = "block";

  // Save progress when answer is revealed
  saveProgress();
}

// Select Answer
function selectAnswer(selectedBtn, correctAnswer) {
  if (selectedBtn.textContent === correctAnswer) {
    clearInterval(timer);
    selectedBtn.classList.add("correct");
    score++;
    currentQuestionAnswered = true; // Set the flag
    saveProgress(); // Save on correct answer
    endAttempt();
  } else {
    // Incorrect answer handling remains the same
    attempts++;
    selectedBtn.classList.add("incorrect");
    selectedBtn.disabled = true;

    saveProgress(); // Save when an attempt is made

    if (attempts >= 2) {
      clearInterval(timer);
      highlightCorrectAnswer();
      endAttempt();
    } else {
      tryAgainMsg.textContent = "Incorrect! Try again.";
      tryAgainMsg.classList.add("visible");
      setTimeout(() => {
        tryAgainMsg.classList.remove("visible");
      }, 2000);
    }
  }
}

// End Attempt
function endAttempt() {
  Array.from(optionsEl.children).forEach((button) => (button.disabled = true));
  nextBtn.style.display = "block";
}

// Update Question Counter
function updateQuestionCounter() {
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${
    currentCategory.length
  }`;
}

// Load Next Question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  attempts = 0; // Reset attempts for next question
  timeLeft = 15; // Reset the timer to the full amount for the next question
  currentQuestionAnswered = false; // Reset the answered flag

  if (currentQuestionIndex < currentCategory.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

// End Quiz
function endQuiz() {
  quizSection.style.display = "none";
  resultsSection.style.display = "block";
  scoreEl.textContent = score;
  displayFeedbackMessage();

  // Mark quiz as completed
  saveProgress(true);
}

// Restart Quiz (Redirect to Category Selection)
restartBtn.addEventListener("click", () => {
  resultsSection.style.display = "none";
  pageTitleSection.style.display = "block";
  document.getElementById("category-section").style.display = "block";

  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  attempts = 0;
});

// Handle page unload (browser close, refresh, navigate away)
window.addEventListener("beforeunload", function (e) {
  // Save progress when leaving the page
  if (quizSection.style.display === "block") {
    saveProgress();
  }
});

// Display Feedback Message
function displayFeedbackMessage() {
  feedbackMessage.className = "feedback-message";
  gifContainer.innerHTML = "";

  // Decide feedback and GIF based on score
  if (score === currentCategory.length) {
    feedbackMessage.textContent = "🏆 You won the league!";
    feedbackMessage.classList.add("perfect-score");
    gifContainer.innerHTML = `
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXg4MWVoZ2Y1b2h2dThrdzRtYWhic3lldWRndWk4MTNwZHlpMXpmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XZLerQ7h0qiu5V8bN1/giphy.gif" 
            alt="Perfect Score GIF" class="responsive-gif">
      `;
  } else if (score >= currentCategory.length * 0.8) {
    feedbackMessage.textContent = "🎉 You finished in the top 4!";
    feedbackMessage.classList.add("great-job");
    gifContainer.innerHTML = `
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDZmY29mNWF6OHZrNDVoaWRycTFsZTdwbzV2anN3NTFwenNkZTR3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu2D938PkrKrcYw/giphy.gif" 
            alt="Great Job GIF" class="responsive-gif">
      `;
  } else if (score >= currentCategory.length * 0.5) {
    feedbackMessage.textContent = "🙂 You finished mid-table!";
    feedbackMessage.classList.add("moderate-score");
    gifContainer.innerHTML = `
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTh0eXR0aWFzdWR5ZjFieWpveDE3M21mcnBqczdyMDdrczA2MWltYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t3qmY19KZtYM8SOBed/giphy.gif" 
            alt="Moderate Score GIF" class="responsive-gif">
      `;
  } else {
    feedbackMessage.textContent = "😔 You got relegated!";
    feedbackMessage.classList.add("low-score");
    gifContainer.innerHTML = `
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHh3cTdoNHFuaWVsNGVoOXdjOWxmMmlzanQzNzJ5bmJyYWxydjZ6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oXn4ii5U4FuC50LEil/giphy.gif" 
            alt="Low Score GIF" class="responsive-gif">
      `;
  }
}

// Utility Function: Shuffle Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
