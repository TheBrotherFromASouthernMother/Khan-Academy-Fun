



/*
function makeCounter(animal) {
  var count = 0;
  function counter() {
    count += 1;
    return count + animal;
  }
  return counter;
 
}


var birdCounter = makeCounter("bird");
var dogCounter = makeCounter("dog");
*/


let container = document.getElementById('container');
let header = document.getElementById('Head');

 function makeTimer(clock, interval) {
   var counter = 0;
   setInterval(timeIt, interval)
    function timeIt() {
      clock.innerHTML(counter);
      counter ++;
    }
 }

 makeTimer(container, 1000);
 makeTimer(header, 500);
