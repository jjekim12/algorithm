const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let array = input.map(val => val.split(' ').map(Number));

let cnt = 0;
for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < array.length; j++) {
        if(array[i][j] % 5 === 0) {
            cnt++;
        }
    }
}

console.log(cnt);