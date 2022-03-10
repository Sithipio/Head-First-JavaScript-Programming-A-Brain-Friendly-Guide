let x;

if (x == undefined) {
        console.log('Undefined')
} else {
        console.log('Fine')
}

let car = {
        "model name" : 'ferrari',
        year : "1997"
}
console.log(car["model" + " name"]);

let test = null;
console.log(typeof test);

let notNumber = 'num' + 9;
if (isNaN(notNumber)) {
        notNumber = 0;
        console.log(notNumber);
}

if (99 == '99') {
        console.log('A number equals a string');
} else {
        console.log('No way a number equals a string');
}