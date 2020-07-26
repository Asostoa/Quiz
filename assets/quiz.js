
// Set the body to a variable
var body = document.body;

// Create all necessary elements
// var container = document.getElementsByid("container")
var container = document.createElement("div")
var h1El = document.createElement("h1");
var h2Div = document.createElement("div")
var h2El = document.createElement("h2");
var optioDiv = document.createElement("div");
var optionsList = document.createElement("ul");
var option1 = document.createElement("li");
var option2 = document.createElement("li");
var option3 = document.createElement("li");
var buttonDiv = document.createElement("div");
var startButton = document.createElement("button");
var highScore = document.createElement("button");
var clockElement = document.createElement("div")
var userClock = document.createElement("p");
var userScore = document.createElement("p");
// Store our li elements in a variable
h1El.textContent = "Quick Quiz";
h2El.textContent = ("Welcome to this fabulous web developer quiz. The rules are very simple, guess the answer for each question and you will increase points. You are wrong and I will subtract points from final scores.Good luck..");
startButton.textContent = "Start";
highScore.textContent = "High Scores!!!";
userClock.textContent = "Timer";


// Append all of our elements
body.appendChild(container);
container.appendChild(h1El);
container.appendChild(h2Div);
container.appendChild(h2El);
container.appendChild(optioDiv);
body.appendChild(buttonDiv);
buttonDiv.appendChild(startButton);
buttonDiv.appendChild(highScore);
body.appendChild(clockElement)
clockElement.appendChild(userClock)
clockElement.appendChild(userScore)

// Style all of our elements
body.setAttribute("style", "background-color: #92DED2; font-family: 'Dosis', sans-serif;")
container.setAttribute("style", " margin-top: 10rem; width:100%; text-align:center;")
h1El.setAttribute("style", "background-color: #2FBEA6; margin:auto; width:50%; text-align:center; border:solid 2px black ; ");
//h2Div.setAttribute("style", "margin-top: 25px; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
optionsList.setAttribute("style", "background-color: #2FBEA6; margin:auto; width:50%; text-align:center; border:solid 2px black ; ")
buttonDiv.setAttribute("style", "padding-top: 12px; margin:auto; width:50%; text-align:center;");
startButton.setAttribute("style", "margin:auto; padding: 15px 32px; width:25%; text-align:center;background-color: #2FBEA6;");
highScore.setAttribute("style", "margin:auto; padding: 15px 32px; display: display: inline-block; text-align:center;background-color: #2FBEA6;");
clockElement.setAttribute("style", "padding-top: 12px; margin:auto; width:20%; text-align:center;");
userClock.setAttribute("style", "border: 3px solid gray; padding: 15px 32px; display: display: inline-block; text-align:center;background-color: #2FBEA6; ")
userScore.setAttribute("style", "border: 3px solid gray; padding: 15px 32px; display: display: inline-block; text-align:center;background-color: #2FBEA6; ")

var currentScore=0
var currentQuestion = 0;
var secondsLeft = 30;
var questionContainer = h2El
userScore.innerText="Your Score is: "+currentScore


questionContainer.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        var answer = event.target.innerText;

        var question = questions[currentQuestion];

        if (answer === question.answer) {
            currentScore++;
            alert("correct")
        } else {
            secondsLeft = secondsLeft - 5;
            alert("incorrect")
        }
        currentQuestion++;
        if (currentQuestion>=questions.lenght) {
            
            finishQuiz();
        } else {
            showCurrentQuestion();
        }
    }
});


function showCurrentQuestion() {
    var question = questions[currentQuestion];
    questionContainer.innerHTML = "";

    var questionTitle = document.createElement("h2")
    questionTitle.innerText = question.question;
    questionContainer.appendChild(questionTitle);

    var userOptions = document.createElement("ul");

    for (i = 0; i < question.options.length; i++) {
        var questionLi = document.createElement("li");
        questionLi.innerText = question.options[i];
        userOptions.appendChild(questionLi);
    }
    questionContainer.appendChild(userOptions);
}



var questions = [{
    question: " 1. What is the symbol(s) to comment out one line in JavaScript?",
    options: ["//This is a comment;", "**This is a comment;", "%% This is a comment"],
    answer: "//This is a comment;"
},
{
    question: "2. Inline CSS is applies a unique style over",
    options: ["Single element;", "Whole document;", "Half document;"],
    answer: "Single element;"

},
{
    question: "3. in HTML, tag used to specify the background color is?",
    options: ["<bg>yellow</bg>;", "< body bg='black'>;", "< body background bg='black'>;"],
    answer: "<bg>yellow</bg>;"
}
]


function starTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        userClock.innerText = `Time: ${secondsLeft}`;
       


    }, 1000);

}


function startQuiz() {
    h2Div.innerHTML = "";
    showCurrentQuestion();
    starTimer();
    if (userClock<=0) {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    
}

startButton.addEventListener("click", startQuiz)