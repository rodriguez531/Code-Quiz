console.log("hello world")
var startButton = document.getElementById('startbtn')
var startEl = document.getElementById('start')
var questionsEl = document.getElementById("question-div")
console.log(startButton)
var currentIndex = 0

var selectingAnswers = function(){
console.log("answer")
if (currentIndex< questions.length){
return displayQuestions ()
}
endQuiz ()
}
var endQuiz = function(){
console.log("end quiz")
}

// Start the Quiz
var startQuiz = function(){
console.log('started')
startEl.style.display = "none"
questionsEl.style.display = "block"
displayQuestions()
//countdown()

}

// Quiz Questions

var displayQuestions = function (){
var questionEl = document.createElement("div");
var currentQuestion = questions[currentIndex]
questionEl.textContent = currentQuestion.question
var answersEl = document.createElement("div");
for (var i=0; i<currentQuestion.choices.length; i++){
   var buttonEl = document.createElement("button")
   buttonEl.textContent = currentQuestion.choices[i] 
   answersEl.append(buttonEl)
   buttonEl.addEventListener("click", selectingAnswers)
}
questionsEl.innerHTML = ""
questionsEl.append(questionEl, answersEl)
currentIndex++
}


var countdown = function () {


}
var questions = [
{
    question: "Question 1", 
    answer: "answer 1",
    choices: ["A", "B", "C", "D"]
},
{
    question: "Question 2", 
    answer: "answer 1",
    choices: ["A", "B", "C", "D"]
},
{
    question: "Question 3", 
    answer: "answer 1",
    choices: ["A", "B", "C", "D"]
}
]
startButton.addEventListener("click", startQuiz);