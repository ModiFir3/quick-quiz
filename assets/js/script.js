//array of questions and answer
const questions = [
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
//score variables
var score = 0;
var questionIndex = 0;
//time variables
var timeLeft = 60;
var penalty = 10;

//hide answer buttons
$('.answer-btn').hide()

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
    $('#score').text(score);

    console.log(questionIndex);
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
                    score++;
                    generateQuestion();
                    console.log("chose the right answer");
                }
            });
        } else {
            //wrong answer
            $('.answer-btn').eq(i).one('click', function () {
                questionIndex++;
                if (questionIndex >= questions.length) {
                    quizEnd();
                } else {
                    generateQuestion();
                    timeLeft = timeLeft - penalty;
                    console.log("chose the wrong answer");
                }
            });
        }
    }
};

function quizEnd() {
    $('#question').remove()
    $('#answer').remove()
}




