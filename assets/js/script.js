//set all DOM hooks
var highScoreEl = document.querySelector(".viewHighScore");
var timerDisplayEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#start");
var startQuizBtn = document.querySelector("#startquiz");
var quizboardEl = document.querySelectorAll(".quizboard");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var resultBoardEl = document.querySelector("#results");
var finalScoreEl = document.querySelector(".final-score");
var submitScoreEl = document.querySelector("#submitScore");
var showQuizBoard = document.querySelector(".hideQuizBoard");
var showResult = document.querySelector(".hideResult");


//Questions and it's answers 

var questionsAndAnswers = [
    {question: "Commonly used data types DO NOT include:",
     a: "strings",
     b: "booleans",
     c: "alerts",
     d: "numbers",
  },
    {quesion: "The condition in and if/else statement is enclosed within _____.",
     q: "quotes",
     b: "curly brackets",
     c: "parentheses",
     d: "square brackets",
  },
    {question: "Array in JavaScript can be used to store ______.",
     a: "numbers and strings",
     b: "other arrays",
     c: "booleans",
     d: "all of the above",
  },
    {question: "String values must be enclosed within ____ when being assigned to variables.",
     a: "commas",
     b: "cruly brackets",
     c: "quotes",
     d: "paraentheses",
  }, 
    {question: "A very useful tool used during development and debugging for printint content to the debugger is:",
     a: "JavaScript",
     b: "terminal/bash",
     c: "for loops",
     d: "console.log",
  },
  ];

var currentQdisplay = 0;
var totalTime = 90;

//local storage for high score
var highScore = localStorage.getItem("highScore");
//submitScoreEl.textContent = highScore;


//set function to start quiz whecn click start

startQuizBtn.addEventListener("click", startQuiz);
//answersEl.addEventListener("click", getAnswer);
//submitScoreEl.addEventListener("click", storeScore);

function startQuiz() {
    showQuizBoard.style.visibility = "visible";
    startTimerTick();
    //displayQuestions();
}


//set function to update timer for the game

function startTimerTick() {
  //set timer
  timerInterval = setInterval(function () {
    if (totalTime === 0) {
      clearInterval(timerInterval);
      showResult.style.visibility = "visible";
    } else {
      totalTime--;
      timerDisplayEl.textContent = totalTime;
    }
  }, 1000);
}


//function displayQuestions () {
    //currentQuestion = questionsAndAnswers[currentIndex];
    //quizboardEl.textContemt = questionsAndAnswers.question;
    //answerOptions.classList.remove("visibility");
    //console.log(displayQuestions)
//}


//answer correct?

//resulst show after quize is done
function quizGameOver() {}
//
