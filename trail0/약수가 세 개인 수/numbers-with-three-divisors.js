const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let start = Number(input[0]);
let end = Number(input[1]);

let result = 0;
for (let i = start; i <= end; i++) {
    let divisor = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            divisor++;
        }
    }
    if (divisor === 3) {
        result++;
    }

}

console.log(result);