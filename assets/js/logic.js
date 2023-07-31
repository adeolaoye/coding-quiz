// Get/Grab All DOM Elements

let startBtn = document.getElementById('start');
let questionsDiv = document.getElementById('questions');
let counter = document.getElementById('time');
let choices = document.getElementById('choices');
let submitBtn = document.getElementById('submit');
let initials = document.getElementById('initials');
let feedback = document.getElementById('feedback');
let startScr = document.getElementById('start-screen');
let questionPrompt = document.getElementById('question-title');
let endScreen = document.getElementById('end-screen');

// Quiz Game variables

let currentQuestionIndex = 0;
let time = 60;
let counterId;

// Start quiz and hide frontpage

function quizStart() {
  counterId = setInterval(countDown, 1000); // start countdown
  counter.textContent = time;
  startScr.setAttribute('class', 'hide'); // make initial heading hide
  questionsDiv.removeAttribute('class'); // remove hide class
  getQuestion(); // activate/call the function
}

// Loop through array of questions

function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  questionPrompt.textContent = currentQuestion.prompt;
  choices.innerHTML = '';
  currentQuestion.options.forEach(function (choice, i) {
    let choiceBtn = document.createElement('button');
    choiceBtn.setAttribute('value', choice);
    choiceBtn.textContent = i + 1 + '. ' + choice;
    choiceBtn.onclick = answerClick;
    choices.appendChild(choiceBtn); // adds button to choices div
  });
}

// Check for right answers and penalize for wrong answer.Then next question

function answerClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    counter.textContent = time;
    feedback.textContent = `Wrong!`;
  } else {
    feedback.textContent = 'Correct!';
  }
  feedback.setAttribute('class', 'feedback');
  setTimeout(function () {
    feedback.setAttribute('class', 'feedback hide');
  }, 2000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// End quiz 

function quizEnd() {
  clearInterval(counterId);
  endScreen.removeAttribute('class');
  let finalScore = document.getElementById('final-score');
  finalScore.textContent = time;
  questionsDiv.setAttribute('class', 'hide');
}

// End quiz when counter is 0

function countDown() {
  time--;
  counter.textContent = time;
  if (time === 0) {
    quizEnd();
  }
}

// Save score in local storage

function saveHighscore() {
  let name = initials.value.trim();
  if (name !== '') {
    let highscores =
      JSON.parse(window.localStorage.getItem('highscores')) || [];
    let newScore = {
      score: time,
      name: name,
    };
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));
  }
}

submitBtn.addEventListener('click', saveHighscore);

// Start quiz after clicking start quiz

startBtn.addEventListener('click', quizStart);