
// psedocode
// we present to the user the instructions, a start button and high score button
// we gonna have a start button that we click.
// when click the button a 60s timmer start counting down.
// we also append to the dom the first question to the user. 
//we also append to the dom our answers
// if the user gets the answers right
//      then we remove the current question and answers
//      and we append the next question and answers
// else if the user answers wrong 
//      we substract 5 senconds from timer
//      then we remove the current question and answers
//      and we append the next question and answers
// if the timer is equal to 0
//      the game is over,
//      we check for past highscore in local storage
//      if is exist 
//              then compare the user score with the high score save in our local storage
//      else then save the users score as highScore
//      we append the high score button


// Set the body to a variable
var body = document.body;

// Create all necessary elements
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
optioDiv.appendChild(optionsList);
optionsList.appendChild(option1);
optionsList.appendChild(option2);
optionsList.appendChild(option3);
body.appendChild(buttonDiv);
buttonDiv.appendChild(startButton);
buttonDiv.appendChild(highScore);
body.appendChild(clockElement)
clockElement.appendChild(userClock)

// Style all of our elements
body.setAttribute("style", "background-color: #92DED2; font-family: 'Dosis', sans-serif;")
container.setAttribute("style", " margin-top: 10rem; width:100%; text-align:center;")
h1El.setAttribute("style", "background-color: #2FBEA6; margin:auto; width:50%; text-align:center; border:solid 2px black ; ");
//h2Div.setAttribute("style", "margin-top: 25px; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
buttonDiv.setAttribute("style", "padding-top: 12px; margin:auto; width:50%; text-align:center;");
startButton.setAttribute("style", "margin:auto; padding: 15px 32px; width:25%; text-align:center;background-color: #2FBEA6;");
highScore.setAttribute("style", "margin:auto; padding: 15px 32px; display: display: inline-block; text-align:center;background-color: #2FBEA6;");
clockElement.setAttribute("style", "padding-top: 12px; margin:auto; width:20%; text-align:center;");
userClock.setAttribute("style", "border: 3px solid gray; padding: 15px 32px; display: display: inline-block; text-align:center;background-color: #2FBEA6; ")


var currentTime = 35;

startButton.addEventListener("click", function () {
    var mainInterval = setInterval(function () {
        currentTime--
        userClock.innerText = currentTime;
        if (currentTime === 0) {

            currentTime = 0;
            h2El.innerText = "";
            buttonDiv.innerText = "";
            container.appendChild(h2El);
            h2El.innerText = "I'm sorry you loose";
            clearInterval(mainInterval)
        }
        if (currentTime === 10) {

            currentTime = 10;
            h2Div.innerText = "";
            buttonDiv.innerText = "";
            h2Div.appendChild(h2El);
            h2El.innerText = questions[0].question;
            optionsList.appendChild(option1)
            optionsList.appendChild(option2)
            optionsList.appendChild(option3)
            option1.innerText=questions[0].question[0].options[0];


         
        }

        if (currentTime === 20) {

            currentTime = 20;
            h2El.innerText = "";
            buttonDiv.innerText = "";
            container.appendChild(h2El);
            h2El.innerText = questions[1].question;


        }
        if (currentTime === 29) {

            clock = 29;
            h2El.innerText = "";
            buttonDiv.innerText = "";
            container.appendChild(h2El);
            h2El.innerText = questions[2].question;


        }





    }, 1000);
    return
})



var questions = [{
    question: " 1. What is the symbol(s) to comment out one line in JavaScript?",
    options: ["//This is a comment;", "**This is a comment;", "%% This is a comment"],
    answer: "//This is a comment;"
},
{
    question: "Inline CSS is applies a unique style over",
    options: ["Single element;", "Whole document;", "Half document;"],
    answer: "Single element;"

},
{
    question: "in HTML, tag used to specify the background color is?",
    options: ["<bg>yellow</bg>;", "< body bg='black'>;", "< body background bg='black'>;"],
    answer: "<bg>yellow</bg>;"
}
]

