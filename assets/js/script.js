//array of questions and answer
const questions = [
    {
        //0
        title: 'Commonly used data types DO Not include:',
        answers: ["string", "alerts", "boolens", "numbers"],
        correctAnswer: 'alerts'
    },
    {
        //1
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
//score variables
var currentScore = 0;
var questionIndex = 0;
//time variables
var timeLeft = 60;
var penalty = 15;

//hide answer buttons
$('.answer-btn').hide();
//hide input for highscore
$('#highscore').hide();

//start Quiz
$('#start').click(function () {
    $('#start').remove();

    //show answer buttons
    $('.answer-btn').show();

    generateQuestion()
});

//generating questions
function generateQuestion() {
    //countdown
    $('#timer').html(timeLeft);
    countdown = setInterval(function () {
        --timeLeft;
        $('#timer').html(timeLeft);
        if (timeLeft <= 0 || questionIndex >= questions.length) {
            clearInterval(countdown);
            $('#timer').remove();
            quizEnd();
        }
    }, 1000);

    //score
    $('#score').text(currentScore);

    $('.answer-btn').off();
    $('#question').text(questions[questionIndex].title);
    for (var i = 0; i < questions[questionIndex].answers.length; i++) {
        $('.answer-btn').eq(i).text(questions[questionIndex].answers[i]);
        if (questions[questionIndex].correctAnswer == questions[questionIndex].answers[i]) {
            //right answer
            $('.answer-btn').eq(i).one('click', function () {
                questionIndex++;
                if (questionIndex >= questions.length) {
                    quizEnd();
                } else {
                    currentScore++;
                    generateQuestion();
                }
            });
        } else {
            //wrong answer
            $('.answer-btn').eq(i).one('click', function () {
                questionIndex++;
                if (questionIndex >= questions.length) {
                    quizEnd();
                } else {
                    timeLeft = timeLeft - penalty;
                    generateQuestion();
                }
            });
        }
    }
};
//end
function quizEnd() {
    $('#question').remove();
    $('#answer').remove();
    $('#highscore').show();
    $('#submitbtn').off();
    //submit
    $('#submitbtn').on('click', function () {
        var userInput = $('#username').val();
        var results = [currentScore, userInput]
        console.log(results)
        if (!userInput) {
            alert('Input a Username!')
        } else {
            localStorage.setItem('highscore', results);
            $('#submitbtn').hide()
            $('#username').hide()
        }
    });
};

