//set all DOM hooks

var timerDisplayEl = document.querySelector("#timer");
var quizQuestionsEl = document.querySelector("#quizQuestions");
var questionsEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#answers");
var resutlAreaEl = document.querrySelector("#results");
var startPageEl =document.querySelector(".startPage");
var startGameEl = document.querrySelector("#submitBtn__stargame");
var scoreEl = document.querySelector("#submitBtn__submitScore");


//set function to start the game

function startPageEl() {
    hide(questions);
    hide(answerChoices);
    hide(resultArea);
    hide(score);
}

