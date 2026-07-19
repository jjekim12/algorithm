const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let emptyIndex = input.indexOf('');

let array1 = input.slice(0, emptyIndex).map(str => str.split(" "));
let array2 = input.slice(emptyIndex + 1).map(str => str.split(" "));

let result = [];
for (let i = 0; i < array1.length; i++) {
    let num = [];
    for (let j = 0; j < array2.length; j++) {
        num.push(array1[i][j] * array2[i][j]);
    }
    result.push(num.join(' '));
}

console.log(result.join('\n'));