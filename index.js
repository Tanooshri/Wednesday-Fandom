var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Tanooshri",
    score: 6,
  },

  {
    name: "Manushri",
    score: 1,
  },
]



function welcome() {
  var username = readlineSync.question("May I have your name?");
  console.log("Welcome! " + username + " to DO YOU KNOW Tanooshri");
}


function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
  }
  console.log("Score: " + score);
  console.log("---------------");
}
var questions = [
  questionOne = {
    question: "Who is my Wednesday?",
    answer: "Outcast"
  },
  questionTwo = {
    question: "Wednesday belongs to which family?",
    answer: "addams"
  },
  questionThree = {
    question: "What is wednesday school name?",
    answer: "Nevermore"
  },
  questionFour = {
    question: "What is Wednesday's roomate name?",
    answer: "enit"
  },
  questionFive = {
    question: "Was her father murdered  man?",
    answer: "No"
  },
  questionSix = {
    question: "Which is her favorite color?",
    answer: "Black"
  }
]

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    play(currentquestion.question, currentquestion.answer);
  }
}
function showScore() {
  console.log("YAY! You scored: " + score);
  console.log("If you beat any of the high scores send me the screenshot then I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
showScore();















