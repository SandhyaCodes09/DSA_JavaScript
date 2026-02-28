// with extra space problem(creating a new array)
// let arr = [60,50,40,30,20,10,5];

// let temp = new Array(arr.length);

// let j = 0;
// for( let i = arr.length-1; i >= 0; i--){

//     temp[j] = arr[i];
//     j++;
// }

// console.log(temp);

// Array Reverse Without using extra array. 

// let array = [10,20,30,40,50,60,70];

// let i = 0 , j = array.length-1 ;

// while(i != j){
    
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;

//     i++;
//     j--;
// }
// console.log(array);


// example: 3

let arr = [1,1,0,1,0,0,1,1,1,0,1,0];

let i = 0 , j= 0;
while (i < arr.length){
    if(arr[i] == 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr);



