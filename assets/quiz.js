


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

userScore.innerText = [];
var currentTime = 30;

startButton.addEventListener("click", function () {

    var mainInterval = setInterval(function () {
        optioDiv.appendChild(optionsList);
        optionsList.appendChild(option1);
        optionsList.appendChild(option2);
        optionsList.appendChild(option3);
        clockElement.appendChild(userScore)
        currentTime--
        userClock.innerText = currentTime;
        if (currentTime === 0) {

            currentTime = 0;

            h2El.innerText = "";
            optionsList.innerText="";
            buttonDiv.innerText = "";
            container.appendChild(h2El);
            h2El.innerText = "I'm sorry you loose";
            clearInterval(mainInterval)
        }
        if (currentTime === 10) {

        
            h2Div.innerText = "";
            buttonDiv.innerText = "";
            h2Div.appendChild(h2El);
            h2El.innerText = questions[2].question;
            h2Div.appendChild(optionsList)
            optionsList.appendChild(option1)
            optionsList.appendChild(option2)
            optionsList.appendChild(option3)
            option1.innerText = questions[2].options["0"];
            option2.innerText = questions[2].options["1"];
            option3.innerText = questions[2].options["2"];
            optionsList.addEventListener("click", function (event) {
                alert(event.target.innerText)
                console.log(event.target.innerText)
                var userChoice = event.target.innerText;
                if (userChoice === questions[1].answer) {
                    alert("buaja")
                    currentTime = 11
                    userScore.innerText = userScore + 10
                }
                else {
                    userScore.innerText =(userScore - 10)
                }


            })



        }

        if (currentTime === 20) {

            currentTime = 20;
            h2El.innerText = "";
            buttonDiv.innerText = "";
            container.appendChild(h2El);
            h2Div.innerText = questions[1].question;
            h2Div.appendChild(optionsList)
            optionsList.appendChild(option1)
            optionsList.appendChild(option2)
            optionsList.appendChild(option3)
            option1.innerText = questions[1].options["0"];
            option2.innerText = questions[1].options["1"];
            option3.innerText = questions[1].options["2"];
            optionsList.addEventListener("click", function (event) {
                alert(event.target.innerText)
                console.log(event.target.innerText)
                var userChoice = event.target.innerText;
                if (userChoice === questions[1].answer) {
                    alert("buaja")
                    currentTime = 11
                    userScore.innerText = userScore + 10
                }
                else {
                    userScore.innerText = userScore - 10
                }




            })



        }
        if (currentTime === 29) {

            clock = 29;
            h2El.innerText = "";
            buttonDiv.innerText = "";
            container.appendChild(h2El);
            h2Div.innerText = questions[0].question;
            optionsList.appendChild(option1)
            optionsList.appendChild(option2)
            optionsList.appendChild(option3)
            option1.innerText = questions[0].options["0"];
            option2.innerText = questions[0].options["1"];
            option3.innerText = questions[0].options["2"];
            optionsList.addEventListener("click", function (event) {
                alert(event.target.innerText)
                console.log(event.target.innerText)
                var userChoice = event.target.innerText;
                if (userChoice === questions[1].answer) {
                    alert("buaja")
                    currentTime = 11
                    userScore.innerText = userScore + 10
                }
                else {
                    userScore.innerText =(userScore - 10)
                }



            })


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

