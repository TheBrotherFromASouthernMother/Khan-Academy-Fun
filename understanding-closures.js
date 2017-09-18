



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
