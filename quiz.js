
//This is a 2D array containing a question answer bank for this simple quiz.
var testQuestions = [
  ["What country is named after the Equator?", "ecuador"],
  ["The initials EU stand for what supranational organization?", "european union"],
  ["Seoul is the capital of what country?", "south korea"]
];

//Empty array literal to carry questions that have been answered correctly
var CorrectAnswers = [];

//Empty array literal to carry questions that have been answered incorrectly
var IncorrectAnwsers = [];

//Tracks the user's responses to the answers
var response;

//Empty html div on which the quiz questions will be outputted once the quiz is over
var output = document.getElementById("output");

//Function declaration so I don't have to write doc.wrt every damn time.
function print(message) {
  document.write(message);
}


//Iterates through the 2D array above and displays quiz questions through JavaScript prompts
for (var i = 0; i < testQuestions.length; i++) {

  response = prompt(testQuestions[i][0]);
  
  //protects against case errors 
  response = response.toLowerCase();
  if (response == testQuestions[i][1] ) {
    //adds correct answers to corresponding array
      CorrectAnswers.push(testQuestions[i][0]);
  
  } else {
  //vice versa: adds incorrect answers to correspond array
    IncorrectAnwsers.push(testQuestions[i][0]);
  }

}
//checks whether users got any answers correct
if (CorrectAnswers.length > 0) {
    //prints the numers of corrects and anwsers and their corresponding questions to the document
    print("You got (" + CorrectAnswers.length + ") questions right: <br>")
    print("<ol>");
    for (var j = 0; j < CorrectAnswers.length; j ++) {
    print("<li>" + CorrectAnswers[j] + "</li>");
    }
    print("</ol>");
}

//checks to see if user got any incorrects
if (IncorrectAnwsers.length > 0) {
      
    print("You got (" + IncorrectAnwsers.length +  ") these questions wrong: <br>");
    print("<ol>");
    for (var j = 0; j < IncorrectAnwsers.length; j ++) {
      print("<li>" + IncorrectAnwsers[j] + "</li>");
    }
    print("</ol>");
}
