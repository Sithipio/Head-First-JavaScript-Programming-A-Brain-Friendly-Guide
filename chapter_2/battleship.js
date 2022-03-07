/*function randomPosition(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

  var randomPositionShip = randomPosition(0, 6);
 document.write(randomPositionShip);
*/

const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

let firstShipPart = true;
let secondShipPart = true;
let thirdShipPart = true;

while (isSunk === false) {
    guess = +prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        (guess === location1 && firstShipPart) ? (firstShipPart = false, hits = hits + 1, alert("HIT")) :
            (guess === location2 && secondShipPart) ? (secondShipPart = false, hits = hits + 1 , alert("HIT")) :
                (guess === location3 && thirdShipPart) ? (thirdShipPart = false, hits = hits + 1, alert("HIT")) : alert("MISS!");
        if (hits >= 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    }
}
const stats = "You took " + guesses + " guesses to sink the battleship, " + "whitch means your shoting accuracy was " + (3 / guesses);
alert(stats);