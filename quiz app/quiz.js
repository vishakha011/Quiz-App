let start = document.querySelector('.start-quiz');
let quiz = document.querySelector('.quiz-container');
let quizImg = document.querySelector('.quiz-img');
// let question = document.querySelector('.questions');
let quizQuestion = document.querySelector('.quiz-question');
let optionA = document.querySelector('.option1');
let optionB = document.querySelector('.option2');
let optionC = document.querySelector('.option3');
let progress = document.querySelector('.progress');
let progressCircle = document.querySelector('.circle')
let scoreDiv = document.querySelector('.score-container');
let finalScore = document.querySelector('.final-score')

let allQuestions = [
    {
        question: "What does HTML stand for?",
        imgSrc: "asstes/images/html.png",
        optionA: "Home Tool Markup Language",
        optionB: "Hyerlinks and Text Markup Language",
        optionC: "Hyper Text Markup Language",
        correct: 'C'
    }, 
    {
        question: "Choose the correct HTML element for the largest heading:?",
        imgSrc: "asstes/images/html.png",
        optionA: "<head>",
        optionB: "<h1>",
        optionC: "<h6>",
        correct: 'B'
    }, 
    {
        question: "What does CSS stand for?",
        imgSrc: "asstes/images/css.png",
        optionA: "Comuter Style Sheets",
        optionB: "Cascading StyleSheets",
        optionC: "Creative style Sheets",
        correct: 'B'
    }, 
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet??",
        imgSrc: "asstes/images/css.png",
        optionA: "In the <head> section",
        optionB: "At the end of the document",
        optionC: "In the <body> section",
        correct: 'A'
    }, 
    {
        question: "Inside which HTML element do we put the JavaScript?",
        imgSrc: "asstes/images/js.png",
        optionA: "<javascript>",
        optionB: "<scripting>",
        optionC: "<script>",
        correct: 'C'
    }, 
    {
        question: "How do you call a function named 'myFunction'?",
        imgSrc: "asstes/images/js.png",
        optionA: "myFunction()",
        optionB: "call myFunction()",
        optionC: "call function myFunction",
        correct: 'A'
    }
];


let lastQuestion = allQuestions.length - 1;
let runningQuestion = 0;
let score = 0;

function renderQuestion(){
    let currentQuestion = allQuestions[runningQuestion];
    quizQuestion.innerText = currentQuestion.question;
    quizImg.src = currentQuestion.imgSrc;
    optionA.innerText = currentQuestion.optionA;
    optionB.innerText = currentQuestion.optionB;
    optionC.innerText = currentQuestion.optionC;
}

renderQuestion();


// Start Quiz

function startQuiz(){
    start.style.display = 'none';
    renderQuestion();
    quiz.style.display = 'block';
    progress.style.display = 'block';
    renderProgress();
   
}

start.addEventListener('click', startQuiz);



// Check Answer

function checkAnswer(answer){
    if(answer === allQuestions[runningQuestion].correct){
        score++;
        correctAnswer();
    }else {
        wrongAnswer();
    }


    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender();
    }
}

// correct Answer and wrong answers

function correctAnswer(){
    // progressCircle.style.backgroundColor = "green";
    
    
}

function wrongAnswer(){
    // progressCircle.style.backgroundColor = "red";
    
}


// Score

function scoreRender(){
    scoreDiv.style.display = 'block';

    let scorePercentage = Math.floor(score / allQuestions.length  * 100);
    finalScore.innerText = `${scorePercentage} %`
}