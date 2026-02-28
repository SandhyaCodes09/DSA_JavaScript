// // Q. Write a program to print the following pattern based on user input n:

// 1234
// 123
// 12
// 1
let prompt = require('prompt-sync')();

let num = Number(prompt("Enter a Number: "));

for (let i = 1; i <= num; i++){
    for(let j = 1; j <= num-i+1; j++){
        process.stdout.write( j +'')
    }
    console.log();
}