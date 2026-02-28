let arr = [10, 2,34, 45, 76, 23];
 let max = arr[0]; 
 let min = arr[0];

 for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }

    if(min > arr[1]){
        min = arr[1];
    }
 }


 console.log(max);
 console.log(min);
