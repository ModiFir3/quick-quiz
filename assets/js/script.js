
let questions = [
    {
        question: 'Commonly used data types DO Not include:',
        answers: ["string", "boolens", "alerts", "numbers",],
        correntAnswer: 'alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ____.',
        answers: ['quotes','curly brackets','parenthesis','square brackets',],
        correntAnswer: 'parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store',
        answers: ['numbers and strings','other arrays','boolens','all of the above',], 
        correntAnswer: 'all of the above',
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: ['commas', 'curly brackets', 'quotes', 'parenthesis',], 
        correntAnswer: 'quotes',
    },
];

//start Quiz
$('#start').on('click', function() {
 $('#start').remove();
 generateQuestion()
});

//generating questions
function generateQuestion () {
    for(let i=0; i < questions.length; i++) {
        $('#question').append("<h2>" + questions[i].question + "</h2>")
    }
    for(let j = 0; j < questoins[i].answers.length; j++) {
        $('#question').append("<h2><input type='radio' name='question-" + i + "'value='</h2>" + questions[i].answers[j] + "'>" + questions[i].answers[j])
    }
};



