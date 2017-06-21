var testQuestions = [
  ["What country is named after the Equator?", "ecuador"],
  ["The initials EU stand for what supranational organization?", "european union"],
  ["Seoul is the capital of what country?", "south korea"]
];

var TrueAnswers = [];
var FalseAnsers = [];
var response;
var output = document.getElementById("output");

function print(message) {
  
  document.write(message);
}



for (var i = 0; i < testQuestions.length; i++) {

  response = prompt(testQuestions[i][0]);
  
  response = response.toLowerCase();
  if (response == testQuestions[i][1] ) {
    
      TrueAnswers.push(testQuestions[i][0]);
  
  } else {
  
    FalseAnsers.push(testQuestions[i][0]);
  }

}

if (TrueAnswers.length > 0) {
    
    print("You got (" + TrueAnswers.length + ") questions right: <br>")
    print("<ol>");
    for (var j = 0; j < TrueAnswers.length; j ++) {
    print("<li>" + TrueAnswers[j] + "</li>");
    }
    print("</ol>");
}


if (FalseAnsers.length > 0) {
      
    print("You got (" + FalseAnsers.length +  ") these questions wrong: <br>");
    print("<ol>");
    for (var j = 0; j < FalseAnsers.length; j ++) {
      print("<li>" + FalseAnsers[j] + "</li>");
    }
    print("</ol>");
}
