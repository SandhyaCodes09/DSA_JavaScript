// Q. Write a program to print the following pattern based on user input n:

// *
// **
// ***
// ****

let prompt = require('prompt-sync')();

let num = Number(prompt("Enter a Number: "));

for (let i = 1; i <= num; i++){
    for (let j = 0; j < i; j++){
        process.stdout.write('*');
    }
    console.log();
}









