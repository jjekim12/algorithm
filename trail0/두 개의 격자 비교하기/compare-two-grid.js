const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let firstLen = input[0].split(' ').map(Number)[0];
let secondLen = input[0].split(' ').map(Number)[1];

let array1 = [];
for (let i = 1; i <= firstLen; i++) {
    array1.push(input[i].split(" "));
}

let array2 = [];
for (let j = firstLen + 1; j < input.length; j++) {
    array2.push(input[j].split(" "));
}

let result;
for (let i = 0; i < firstLen; i++) {
    result = [];
    for (let j = 0; j < secondLen; j++) {
        if (array1[i][j] === array2[i][j]) {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    console.log(result.join(' '));
}