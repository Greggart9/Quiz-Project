//Question bank
var questionBank = [
    {
        question : 'Which Somo possess these traits? Mischievous, Charismatic, Careless, Generally good-natured, Imaginative, Multifaceted',
        option : ['Kali', 'Bloomi', 'Tripps', 'Chungus'],
        answer : 'Tripps'
    },
    {
        question : 'Which Somo possess these traits? Vain, Lofty, Controlling, Loyal, Vicious, Impulsive',
        option : ['Slimer', 'Alter', 'Bloomi', 'Kali'],
        answer : 'Kali'
    },
    {
        question : 'Which Somo possess these traits? Adventurous, Friendly, (At lvl 3) Stern, (lvl 3) Self serious, Disorderly, Forgetful',
        option : ['Slimer', 'Clotty', 'Graven', 'Drakk'],
        answer : 'Slimer'
    },
    {
        question : 'Which Somo possess these traits? Naive, Intelligent, Curious, Defensive, Chaotic, Angry',
        option : ['Drakk', 'Techno-g', 'Alter', 'Chungus'],
        answer : 'Techno-g'
    },
    {
        question : 'Which Somo possess these traits? Sleepy, Protective, Irritable,Cuddly, Mellow, Inert',
        option : ['Slimer', 'Techno-g', 'Kali', 'Chungus'],
        answer : 'Chungus'
    },

    {
        question : "Which of the accounts below is Somo's Official account on X ?",
        option : ['@PlaySomo', '@playsomo', '@play_somo', '@plaaysomo'],
        answer : '@playsomo'
    }
]
//variable declaration
var i = 0;

//var dom
var question_container = document.querySelector('.question_container')
var first = document.querySelector('.first');
var questions = document.querySelector('.questions');
var que = document.querySelector('.que');
var allOptions = document.querySelector('.allOptions');
var option = document.querySelector('.option');
var option0 = document.querySelector('#option0');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var allAnswer = document.querySelector('.allAnswer');
var answer0 = document.querySelector('.answer0');
var answer1 = document.querySelector('.answer1');
var answer2 = document.querySelector('.answer2');
var answer3 = document.querySelector('.answer3');
var answer4 = document.querySelector('.answer4');
var qCounter = document.querySelector('.qCounter');
var nextBtn = document.querySelector('.nextBtn');
var prevBtn = document.querySelector('.prevBtn')
var theBody = document.querySelector('.theBody')
var modeBtn = document.querySelector('.modeBtn')
var theBody = document.querySelector('.theBody')
var darkmodeToggle = document.getElementById('darkmodeToggle')
var header = document.querySelector('.header')
var questions = document.querySelector('.questions')
var textLogo = document.querySelector('.textLogo')
var textMode = document.querySelector('.textMode')
var que = document.querySelector('.que')
var qCounter = document.querySelector('.qCounter')
var result_container = document.querySelector('.result_container')
var result = document.querySelector('.result')
var button = document.querySelector('.button')
var nbutton = document.querySelector('.nbutton')
var tryagain = document.querySelector('.tryagain')
var retake = document.querySelector('.Retake')
var check = document.querySelector('.check')
var reveal_answer = document.querySelector('.reveal_answer')
var reveal_container = document.querySelector('.reveal_container')
var answer0 = document.querySelector('.answer0')
var score_result = document.querySelector('.score_result')
var resulth1 = document.querySelector('.resulth1')
var startcontainer = document.querySelector('.startcontainer')




function displayQuestion(){
que.innerHTML = 'Q.'+ [i+1]+' '+ questionBank[i].question
option0.innerHTML = questionBank[i].option[0]
option0.setAttribute('value', questionBank[i].option[0])
option1.innerHTML = questionBank[i].option[1]
option1.setAttribute('value', questionBank[i].option[1])
option2.innerHTML = questionBank[i].option[2]
option2.setAttribute('value', questionBank[i].option[2])
option3.innerHTML = questionBank[i].option[3]
option3.setAttribute('value', questionBank[i].option[3])
qCounter.innerHTML = 'Question' +' '+ [i+1]+ ' of '+ questionBank.length
}
displayQuestion()


//PREVIOUS BUTTON

function previousButton(){
    if(i > questionBank.length - questionBank.length ){
        i--
        displayQuestion()
    }
}
prevBtn.addEventListener('click', previousButton)


//NEXT BUTTON

function nextButton(){
    if(i < questionBank.length - 1){
        i++
        displayQuestion()
        option0.classList.remove('optionBg')
        option1.classList.remove('optionBg')
        option2.classList.remove('optionBg')
        option3.classList.remove('optionBg')
    }
    else{
        result_container.style.display = 'flex'
        result.style.display = 'block'
        question_container.style.display = 'none'
        startcontainer.style.display = 'none'
        score_result.innerHTML = count(scoreBoard) + '/' + questionBank.length
    }
}
nextBtn.addEventListener('click', nextButton)

//BACK TO QUIZ

function TryAgain(){
    question_container.style.display = 'flex'
    result.style.display = 'none'
    result_container.style.display = 'none'
    scoreBoard.length = 0;
    displayQuestion(i = 0)
}
tryagain.addEventListener('click', TryAgain)

// RETAKE QUIZ

function Retake(){
    question_container.style.display = 'flex'
    result.style.display = 'none'
    result_container.style.display = 'none'
    reveal_answer.style.display = 'none'
    reveal_container.style.display = 'none'

    scoreBoard.length = 0;
    displayQuestion(i = 0)
}
retake.addEventListener('click', Retake)

//SHOW ANSWER

check.addEventListener('click', function(){
    reveal_answer.style.display = 'block'
    result_container.style.display = 'none'
    result.style.display = 'none'
    reveal_container.style.display = 'flex'
    answer0.innerHTML = questionBank[0].answer
    answer1.innerHTML = questionBank[1].answer
    answer2.innerHTML = questionBank[2].answer
    answer3.innerHTML = questionBank[3].answer
    answer4.innerHTML = questionBank[4].answer
    

} )

// DARK MODE

darkmodeToggle.addEventListener('click', function(){
    theBody.classList.toggle('darkmode')
    header.classList.toggle('darkHeader')
    questions.classList.toggle('darkQuestions')
    textLogo.classList.toggle('darkText')
    textMode.classList.toggle('darkText')
    que.classList.toggle('darkText')
    allOptions.classList.toggle('darkText')
    option0.classList.toggle('darkText')
    option1.classList.toggle('darkText')
    option2.classList.toggle('darkText')
    option3.classList.toggle('darkText')
    qCounter.classList.toggle('darkText')
    option0.classList.toggle('darkOption0')
    option1.classList.toggle('darkOption1')
    option2.classList.toggle('darkOption2')
    option3.classList.toggle('darkOption3')
    button.classList.toggle('darkButton')
    nbutton.classList.toggle('darkButton')
    result.classList.toggle('darkResult')
    score_result.classList.toggle('darkText')
    resulth1.classList.toggle('darkText')
    tryagain.classList.toggle('darkText')
    check.classList.toggle('darkText')
    retake.classList.toggle('darkText')
    tryagain.classList.toggle('darkmode')
    check.classList.toggle('darkmode')
    retake.classList.toggle('darkmode')
    reveal_answer.classList.toggle('darkText')
    reveal_answer.classList.toggle('darkResult')

})

var scoreBoard = []

// CHOOSING ANSWER
function Answer(i, e){
    let choosenAnswer = e.target.getAttribute('value');
    console.log(choosenAnswer);

    let correctAnswer = questionBank[i].answer;

    if (choosenAnswer === correctAnswer ){
        scoreBoard[i] = true
        console.log(scoreBoard);

    }else{
        scoreBoard[i] = false  
    }
}


function count(scoreBoard) {
    let t = 0
    for (i = 0; i < scoreBoard.length;  i++) {
        if(scoreBoard[i] === true){
            t++
        }
        
    }
    return t
}
option0.addEventListener('click', function(e){
    Answer(i, e)
    option0.classList.add('optionBg')
    option1.classList.remove('optionBg')
    option2.classList.remove('optionBg')
    option3.classList.remove('optionBg')

})
option1.addEventListener('click', function(e){
    Answer(i, e);
    option0.classList.remove('optionBg')
    option1.classList.add('optionBg')
    option2.classList.remove('optionBg')
    option3.classList.remove('optionBg')
    

})
option2.addEventListener('click', function(e){
    Answer(i, e);
    option0.classList.remove('optionBg')
    option1.classList.remove('optionBg')
    option2.classList.add('optionBg')
    option3.classList.remove('optionBg')
})
option3.addEventListener('click', function(e){
    Answer(i, e);
    option0.classList.remove('optionBg')
    option1.classList.remove('optionBg')
    option2.classList.remove('optionBg')
    option3.classList.add('optionBg')

})
var timeLimit = 30; // Time limit in seconds
    var timer;

    function startQuiz() {
        document.getElementById('startButton').style.display = 'none'
        question_container.style.display = 'flex';
        timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        var minutes = Math.floor(timeLimit / 60);
        var seconds = timeLimit % 60;
        document.getElementById('countdown').innerHTML = minutes + "m " + seconds + "s ";

        if (timeLimit == 0) {
            clearInterval(timer);
            alert("Time's up! Quiz has ended."); // You can customize this alert or add logic for quiz completion
            result_container.style.display = 'flex'
            result.style.display = 'block'
            question_container.style.display = 'none'
            score_result.innerHTML = count(scoreBoard) + '/' + questionBank.length
            document.getElementById('startButton').style.display = 'none'
            startcontainer.style.display = 'none'
        } else {
            timeLimit--;
        }
    }