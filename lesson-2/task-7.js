const array = [1, 2, 3, 4];
let sum = 0;

for(let i = 0; i < array.length; i++) {
    
    if(i % 2 === 1) {
    sum += array[i];
        }   
    }
   
   console.log(sum);
