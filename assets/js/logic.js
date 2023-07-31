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