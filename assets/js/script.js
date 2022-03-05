//array of questions and answer
let questions = [
    {
        title: 'Commonly used data types DO Not include:',
        answers: ["string", "alerts", "boolens", "numbers"],
        correctAnswer: 'alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed with ____.',
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correctAnswer: 'parenthesis'
    },
    {
        title: 'Arrays in JavaScript can be used to store',
        answers: ['numbers and strings', 'other arrays', 'boolens', 'all of the above'],
        correctAnswer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: ['commas', 'curly brackets', 'parenthesis', 'quotes'],
        correctAnswer: 'quotes',
    },
];

var score = 0;
var questionIndex = 0;

var timeLeft = 60;
var penalty = 10;

//start Quiz
$('#start').on('click', function () {
    $('#start').remove();
    startQuiz()
});


//generating questions
function startQuiz() {
    $('.answer-btn').
    //countdown timer
    $('#timer').html(timeLeft);
    countdown = setInterval(function () {
        --timeLeft;
        $('#timer').html(timeLeft);
        if (timeLeft === 0) {
            alert('Time is up!');
            clearInterval(countdown)
            quizEnd()
        }
    }, 1000);

    generateQuestion()
};

//generating questions
function generateQuestion() {
    console.log(questionIndex);
    $('.answer-btn').off()
    $('#question').text(questions[questionIndex].title);
    for (var i = 0; i < questions[questionIndex].answers.length; i++) {
        $('.answer-btn').eq(i).text(questions[questionIndex].answers[i]);
        if (questions[questionIndex].correctAnswer == questions[questionIndex].answers[i]) {
            $('.answer-btn').eq(i).one('click', function () {
                questionIndex++;
                if (questionIndex >= questions.length) {
                    quizEnd();
                } else {
                    generateQuestion();
                }
            });
        } else {
            $('.answer-btn').eq(i).one('click', function () {
                questionIndex++;
                if (questionIndex >= questions.length) {
                    quizEnd();
                } else {
                    generateQuestion();
                }
            });
        }
    }
};

function quizEnd() {
    $('#question').remove()
    $('#answer').remove()
}




