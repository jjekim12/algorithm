const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let array = input.map(val => val.split(' ').map(Number));

let sum = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j <= i; j++) {
        sum += array[i][j];
    }
}

console.log(sum);