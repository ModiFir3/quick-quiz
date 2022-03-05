//array of questions and answer
let questions = [
    {
        title: 'Commonly used data types DO Not include:',
        answers: ["string", "boolens", "alerts", "numbers",],
        correntAnswer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed with ____.',
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets',],
        correntAnswer: 'parenthesis',
    },
    {
        title: 'Arrays in JavaScript can be used to store',
        answers: ['numbers and strings', 'other arrays', 'boolens', 'all of the above',],
        correntAnswer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: ['commas', 'curly brackets', 'quotes', 'parenthesis',],
        correntAnswer: 'quotes',
    },
];

var score = 0;
var questionIndex = 0;

var timeLeft = 60;
var penalty = 10;

var questionClear = "";
var answerClear = "";

//start Quiz
$('#start').on('click', function () {
    $('#start').remove();
    startQuiz()
});


//generating questions
function startQuiz() {
    //countdown timer
    $('#timer').html(timeLeft);
    countdown = setInterval(function() {
        --timeLeft;
        $('#timer').html(timeLeft);
        if (timeLeft === 0) {
            alert('Time is up!');
            clearInterval(countdown)
        }
    }, 1000);
    
    //generating questions
    function generateQuestion(questionIndex) {
        $('#question').html(questionClear);
        $('#answer').html(answerClear);
        for (var i = 0; i < questions.length; i++) {
            var userQuestion = question[questionIndex].title;
            var userAnswer = questions[questionIndex].answers;
        $('#question').append(userQuestion);
        }
    }

};

function quizEnd() {

}



