
function print(message) {
  document.write(message);
}



var testQuestions = [
  ["What country is named after the Equator?", "ecuador"],
  ["The initials EU stand for what supranational organization?", "european union"],
  ["Seoul is the capital of what country?", "south korea"]
];


var TrueAnswers = [];

var FalseAnsers = [];
var response;


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
  
    
    print(TrueAnswers[0] + "<br>");

}


if (FalseAnsers.length > 0) {
      
      print("You got (" + FalseAnsers.length +  ") these questions wrong: <br>");
    
    
      print(FalseAnsers[0] + "<br>");
}
