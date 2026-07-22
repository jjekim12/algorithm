const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let result = [];
for(let i = 0; i < input; i++) {
    result.push(new Array(4).fill(0));
}

for(let i = 1; i <= input; i++) {
    result = [];
    if(i % 2 === 0) {
        for(let j = input; j > 0; j--) {
            result.push(j);
        }
    } else {
        for(let j = 1; j <= input; j++) {
            result.push(j);
        }
    }
    console.log(result.join(''));
}