




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

