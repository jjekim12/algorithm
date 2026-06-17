const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let result = '';
let num = 0;
for(let i = 1; i <= input; i++) {
    for(let number = 0; number < i; number++) {
        num = num + 1;
        result += num + ' ';
    }

    for(let blank = i; blank < 0; blank--) {
        result += ' ';
    }

    if(i < input) result += '\n';
}

console.log(result);