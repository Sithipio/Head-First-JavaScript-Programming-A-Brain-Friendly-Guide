Math.floor(Math.random() * (max - min + 1)) + min
function randomPosition(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
  var randomPositionShip = randomPosition(0, 6);
  console.log(