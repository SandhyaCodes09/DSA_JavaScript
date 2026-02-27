// Q. Write a program to print the following pattern based on user input n:

// 54321
// 4321
// 321
// 21
// 1

let prompt = require('prompt-sync')();
let num = Number(prompt("Enter a Number: "));

for(let i = 1; i <= num; i++ ){
    for( let j = num-i+1; j > 0 ; j--){

        process.stdout.write(j + "");
    }
    console.log()
}