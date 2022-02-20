/*function randomPosition(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

  var randomPositionShip = randomPosition(0, 6);
 document.write(randomPositionShip);
*/

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	}
	else {
		guesses = guesses + 1;                 
       (guess == location1 && firstShipPart == false) ? (firstShipPart = true, hits = hits + 1, alert("HIT")) : 
        (guess == location2 && secondShipPart == false) ? (secondShipPart = true, hits = hits + 1 , alert("HIT")) : 
        (guess == location3 && thirdShipPart == false) ? (thirdShipPart = true, hits = hits + 1, alert("HIT")) : alert("MISS!");
			if (hits >= 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}
		}
	}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "whitch means your shoting accuracy was " + (3/guesses);
alert(stats);