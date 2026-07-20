const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let array = input.map(val => val.split(' '));

let total = [];
for (let i = 0; i < input.length; i++) {
    let cnt = 0;
    for (let j = 0; j < array[i].length; j++) {
        let num = Number(array[i][j]);
        cnt += num;
    }
    total.push(cnt);
}

console.log(total.join('\n'));
