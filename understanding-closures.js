/*
If I understand correctly, closures are about protecting the scope of a variabe so that it can be reused without
inadvertantly altering other crucial parts of our code.
*/

//Example One:

//Everrytime the function is called, we want it to add a number to the animal value that we insert
function makeCounter(animal) {
  //variables declared with var  are hoisted to the scope of whatever function it is that contains them
  //var count is accessible anywhere in the function makeCounter()
  var count = 0;
  
  function counter() {
    count += 1;
    return count + animal;
  }
  return counter;
 
}


var birdCounter = makeCounter("bird");
var dogCounter = makeCounter("dog");





-------------------
var container = document.getElementById('container');
var header = document.getElementById('header');
//For outputs sake

//function to make a html element increment
 function makeTimer(clock, interval, timeMeasure) {
   var counter = 0;
    function timeIt() {
      counter ++;
      clock.innerHTML = counter + " " + timeMeasure;

    }
    setInterval(timeIt, interval)
 }

 makeTimer(container, 1000, "seconds");
 makeTimer(header, 100, "miliseconds");
