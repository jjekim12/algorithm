const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const rows = input.length;

let array = [];
for (let i = 0; i < rows; i++) {
    const rowData = input[i].split(" ").map(Number);
    array.push(rowData);
}

let newArray = array.map(row => row.map(e => e * 3));

for (let x = 0; x < newArray.length; x++) {
    str = "";
    for (let y = 0; y < newArray[x].length; y++) {
        str += newArray[x][y] + " ";
    }
    console.log(str);
}