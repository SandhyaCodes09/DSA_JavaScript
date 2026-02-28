// left swap element
let arr = [2,4,3,6,9,1];

let copy = arr[0];

for(let i = 0; i < arr.length-1; i++){
       arr[i] = arr[i+1];
}

arr[arr.length-1] = copy;

console.log(arr);