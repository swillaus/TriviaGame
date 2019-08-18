// Set up variable with initial stopwatch timer
var startTime = 28;
var answers = ["Essendon", "Option A", "Option A"]
var userSelection = []
var wins = 0;
var losses = 0;
var intervalId;

var questions = [
  {
    question: "Who won the 2000 AFL Grand Final?",
    answers: ["Essendon", "Carton", "Brisbane", "Fremantle"],
    correct: "Essendon"
  },
  {
    question: "Who won the 2018 Brownlow medial?",
    answers: ["Jobe Watson", "Tom Mitchell", "Tony Modra", "Scott Pendlebury"],
    correct: "Tom Mitchell"
  },
  {
    question: "What city is the AFL Grand Final played in?",
    answers: ["Sydney", "Adelaide", "Perth", "Melbourne"],
    correct: "Melbourne"
  },
]

for(var i = 0; i < questions.length; i++){
  var question = $("<h3>").text(questions[i].question)
  $("#questionBox").append(question)
  for(var j = 0; j < questions[i].answers.length; j++){
    var div = $("<span>").text(questions[i].answers[j]);
    var input = $("<input type='radio'>")
    input.attr("name", "q-" + i).val(questions[i].answers[j]);
    div.prepend(input)
    $("#questionBox").append(div)
  }
}

$("#questionBox").hide();
$("#Submit").hide();
$("#timerDisplay").hide();
$("#results").hide();


// create function to begin a decrementing timer
function run() {
  $("#results").hide();
  $("#questionBox").show();
  $("#Submit").show();
  $("#timerDisplay").show();
  $("#startTimer").hide();
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  startTime--;

  $("#TimeCounter").html("<span>" + startTime + "</span>");

  if (startTime === 0) {

    stop();

    alert("Time Up!");
  }
}


//   check to see what this part of the function does
function stop() {
  startTime = 28
  $("#TimeCounter").text(startTime)
  clearInterval(intervalId);
}

// check to see answers and update scores accoringly
function checkScores() {
  for (i = 0; i < answers.length; i++) {
    if (answers[i] === userSelection[i]) {
      wins++
    } else {
      losses++
    }
  }
  console.log("wins: " + wins)
  console.log("losses: " + losses)

}

// $('input[type=radio][name=Criteria1Score]:checked').attr('id')

  $("#startTimer").click(function() {
    run();
  });


// execute the function to begin timer


$("#Submit").click(function() {
  stop();

  for(var i = 0; i < questions.length; i++){
    var answer = $("input[name=q-"+i+"]:checked").val()
    var correct = questions[i].correct;

    if(answer === correct){
      console.log("Correct", i + 1, answer)
      wins++
    } else {
      console.log("Incorrect", i + 1, answer)
      losses++;
    }
  }
  $("#correct").text(wins)
  $("#incorrect").text(losses)

  $("#timerDisplay").hide()
  $("#Submit").hide()
  $("#questionBox").hide()
  $("#results").show()
  $("#startTimer").show()
  //checkScores();
}); 

