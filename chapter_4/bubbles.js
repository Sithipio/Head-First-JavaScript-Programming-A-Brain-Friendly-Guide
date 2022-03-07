let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let output;
let highScore = 0;
/*while (i < scores.length) {
    output = "Buble solution #" + i + " score: " + scores[i];
    console.log(output);
    i = i + 1;
}
 */
for (let i = 0; i < scores.length; i++) {
    output = "Buble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
/*
let bestSolutions = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Solutions with the highest score: " + bestSolutions);

 */
/*let bestSolutions = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions[bestSolutions.length] = i;
        for (let k = 0; k < scores.length; k++) {
            if (bestSolutions[k] == undefined) {
                bestSolutions[k] = i;
                break;
            }
        }
    }
}*/

let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions[bestSolutions.length] = i;
    }
}
console.log("Solutions with the highest score: " + bestSolutions);