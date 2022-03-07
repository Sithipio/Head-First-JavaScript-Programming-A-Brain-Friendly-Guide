let skill = 1.0;
let userPoints = 2008;

function updatePoints(bonus, newPoints) {
    let i = 0
    while (i < bonus) {
        newPoints = newPoints + skill * bonus;
        i++;
    }
    return newPoints + userPoints;
}
userPoints = updatePoints(2, 100);
console.log(userPoints);