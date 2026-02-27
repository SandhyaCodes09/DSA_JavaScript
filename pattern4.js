// Q. Write a program to print the following pattern based on user input n:

// 1 
// 2 4 
// 3 6 9 
// 4 8 12 16 
let prompt = require('prompt-sync')();

let num = Number(prompt("Enter a Number: "));

for (let i = 1; i <=num ; i++){
      for (let j = 1; j <= i; j++){
          process.stdout.write(i*j+" ");
      }

      console.log();
}