let count = 1;
let score = 0;
let flag = 1;
let time = 60;
let answers = [];
let questions = [
  {
    question : "Color of the Sky?",
    answer : "blue"
  },
  {
    question : "What color is grass?",
    answer : "green"
  },
  {
    question : "What color is the sun?",
    answer : "yellow"
  },
  {
    question : "What color are strawberries?",
    answer : "red"
  },
  {
    question : "What color are clouds?",
    answer : "white"
  }
]




var timer = new easytimer.Timer();


function startCounter(){
  timer.start({countdown: true, startValues: {seconds: time}});

$('#time').html("Timer Remaining : "+timer.getTimeValues().toString());

timer.addEventListener('secondsUpdated', function (e) {
    $('#time').html("Timer Remaining : "+timer.getTimeValues().toString());
});

timer.addEventListener('targetAchieved', function (e) {
    flag = 0;
    document.getElementById('popup').classList.add("active")
    $('#time').html('')
});
}


let length = questions.length

function showQuestions() {
  let element = document.getElementById('start');
  element.classList.add("active");
  document.getElementById("time").innerHTML = "Time Remaining : "+ timer;
  document.getElementById("time").classList.add("active");
  startCounter()
  showQuestion();
}

function showQuestion(){
  var x = document.getElementById("audio");
  x.play();
  if(count != length+1){
    if(count % 2 == 0){
      displayEven()
    }
    else {
      displayOdd()
    }
    count+=1
  }
  else{
    showResult()
  }
}


function displayEven(){
  let ele1 = document.getElementById('ques1');
  let ele2 = document.getElementById('ques2');
  document.getElementsByName('answer')[1].value = "";
  document.getElementById('quest2').innerHTML = questions[count-1].question;
  ele1.classList.toggle("active");
  ele2.classList.toggle("active");
  answers.push(document.getElementsByName('answer')[0].value.toLowerCase());
  document.getElementsByName('answer')[0].value = "";
}

function displayOdd(){
  let ele1 = document.getElementById('ques1');
  let ele2 = document.getElementById('ques2');
  document.getElementsByName('answer')[0].value = "";
  document.getElementById('quest1').innerHTML = questions[count-1].question;
  ele1.classList.toggle("active");
  if(count !=1){
  ele2.classList.toggle("active");
  answers.push(document.getElementsByName('answer')[1].value.toLowerCase());
  document.getElementsByName('answer')[1].value = "";
  }
}

function restart() {
  console.log("Check");
  score = 0;
  count = 1;
  time = 60;
  answers =[];
  flag = 1;
  document.getElementById('results').classList.remove("active");
  let element = document.getElementById('start');
  element.classList.remove("active");
}



function showResult(){
  document.getElementById('popup').classList.remove("active");
  timer.stop();
  $('#time').html("")
  if(count % 2 == 0){
    answers.push(document.getElementsByName('answer')[0].value.toLowerCase());
    document.getElementById("ques1").classList.remove("active");
    document.getElementsByName('answer')[0].value = "";
  }
  else {
    answers.push(document.getElementsByName('answer')[1].value.toLowerCase());
    document.getElementById("ques2").classList.remove("active");
    document.getElementsByName('answer')[1].value = "";
  }


  for(let i = 0 ; i<length ; i++){
    if(answers[i] == questions[i].answer){
      score +=1;
    }
  }
  // clearTime();
  document.getElementById('results').classList.add("active");
  document.getElementById('score').innerHTML = score + '/' + length;

}


let forms = document.getElementsByTagName('form');
for( let k=0;k<forms.length;k++){
  forms[k].addEventListener('submit',handleForm)
}


function handleForm(event){
  event.preventDefault();
  if(flag != 0){
    showQuestion();
  }
}
