//set all DOM hooks
var highScoreEl = document.querySelector(".viewHighScore");
var timerDisplayEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#start");
var startQuizBtn = document.querySelector("#startquiz");
var quizboardEl = document.querySelector("#quizboard");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var resultBoardEl = document.querySelector("#results");
var finalScoreEl = document.querySelector(".final-score");
var submitScoreEl = document.querySelector("#submitScore");
var showQuizBoard = document.querySelector(".hideQuizBoard");
var showResultEl = document.querySelector(".hideResult");
var initialEl = document.querySelector("#initials");
var scoreRecordEl = document.querySelector("#scoreRecord");
var finalUserRecordEl = document.querySelector("#finalUserRecord");
var returnToQuizEl = document.querySelector("#return-btn");
var clearScoreEl = document.querySelector("#clearScore-btn");

//Questions and it's answers 

var questionsAndAnswers = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    CorrectAnswer: "alerts",
  },
  {
    question: "The condition in and if/else statement is enclosed within _____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    CorrectAnswer: "parentheses",
  },
  {
    question: "Array in JavaScript can be used to store ______.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    CorrectAnswer: "all of the above",
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "paratheses"],
    CorrectAnswer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printint content to the debugger is:",
    options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    CorrectAnswer: "console.log",
  },
];

var currentQdisplay = 0;
var totalTime = 60;

//local storage for high score
var highScore = localStorage.getItem("highScore");
//submitScoreEl.textContent = highScore;


//set function to start quiz whecn click start

startQuizBtn.addEventListener("click", startQuiz);
//answersEl.addEventListener("click", getAnswer);
//submitScoreEl.addEventListener("click", storeScore);

function startQuiz() {
  startPageEl.remove();
  startTimerTick();
  displayQuestions();
}


//set function to update timer for the game

function startTimerTick() {
  //set timer
  timerInterval = setInterval(function () {
    if (totalTime === 0) {
      clearInterval(timerInterval);
      quizGameOver();
    } else {
      totalTime--;
      timerDisplayEl.textContent = totalTime;
    }
  }, 1000);
}

//after game start to display the questions ans choices for users
var currentQuestionIndex = 0;
var correct = 0;

function displayQuestions() {
  quizboardEl.classList.remove("hideQuizBoard");
  for (i = 0; i < questionsAndAnswers.length; i++) {
    currentQ = questionsAndAnswers[currentQuestionIndex];
    //console.log(currentQ);
    questionsEl.textContent = currentQ.question;
  }
  displayOptions();
}
//show second question when go to answer is selected 

function displayOptions() {
  answersEl.innerHTML = "";
  for (i = 0; i < currentQ.options.length; i++) {
    //optionsChoice = questionsAndAnswers[0];
    var answerOptions = document.createElement("button");
    answerOptions.classList.add("btn");
    answerOptions.textContent = currentQ.options[i];
    answersEl.appendChild(answerOptions);
    console.log(currentQ.options[i]);
  }
}
//need to remove the first set of answer sets after making selection
 //answer correct?

  //resulst show after quize is done

function selectAnswer() {
  console.log(event.target.textContent);
  var clickedAnswer = event.target.textContent;
  //changing the currentQuestionIndex \
 // for (i=0, i , current)
  if (clickedAnswer === currentQ.CorrectAnswer) {
    //currentQuestionIndex++;
    //alert("Correct!");
    //displayQuestions();
    //console.log(clickedAnswer);
  } else {
    //alert("Wrong!");
    totalTime = totalTime - 10;
    console.log (totalTime);
    if (totalTime < 0) {totalTime = 0;}
    timerDisplayEl.textContent=totalTime;
    //currentQuestionIndex++;
    //displayQuestions();
  }; currentQuestionIndex++;
  if (questionsAndAnswers.length < currentQuestionIndex+1
    )
  {quizGameOver();} else {;
    //currentQuestionIndex++;
    displayQuestions();}

}
  answersEl.addEventListener("click", selectAnswer);


function quizGameOver() { 
 // if (clickedAnswer == currentQ.options[4]) {
   // quizGameOver();
 // } else {
   // if (timerDisplayEl = 0) {
   //    } else {
    timerDisplayEl = "";
    if (totalTime < 0) {totalTime = 0;}
    finalScoreEl.textContent = totalTime;
  quizboardEl.classList.add("hideQuizBoard");
  resultBoardEl.classList.remove("hideResult");
}


//
  //var score = localSt.getItem("score");
  //totalTime.textContent = score;
  
  /**
     *  Get previous scores from localStorage
     *  push newone with previous scores
     *  set them in localStorage.
     */
    //[ { "initial:":""; "Score": ""}, { }

    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    submitScoreEl.addEventListener("click", function(event){
      event.preventDefault();
      var scoreList = {
        Initial: initialEl.value,
        Score: finalScoreEl.textContent,
      }
      highScores.push(scoreList);

      localStorage.setItem("highScores", JSON.stringify(highScores));
     // resultBoardEl.remove();
      //scoreRecordEl.classList.remove("hideScoreRecord");
      //renderHighScore();
     
     resultBoardEl.remove();
    scoreRecordEl.classList.remove("hideScoreRecord");
    renderHighScore();
    })

   // localStorage.setItem("recoredScore", JSON.stringify(scoreList));
    //resultBoardEl.remove();
    //scoreRecordEl.classList.remove("hideScoreRecord");
   
  
  
  function renderHighScore() {
    var displayScores = JSON.parse(highScores);
    for (i = 0; i < displayScores.length; i++) {
     var storedScoreLIst = finalUserRecordEl.createElement("li"); 
     storedScoreLIst.textContent = highScores;
     finalScoreEl.appendChild(highScores);
    }}
   
  
  
    returnToQuizEl.addEventListener("click",function(event) {
      event.preventDefault();
      window.location.href="index.html";})
  
      clearScoreEl.addEventListener("click", function(event){
        event.preventDefault();
        localStorage.clear();
      })
     // if(initialEl) {
        
    
  
   // function clearQuestion () {
      //if 
    
    //function quizOver () {
  
  
    
   
    //save score to loca sotrage 
  