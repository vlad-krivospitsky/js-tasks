const array = [2, 5, 9, 15, 0, 4];

let result = 0;

for(let i = 0; i < array.length; i++) {
    if(array[i] > 3 && array[i] < 10) {
        result += array[i];
    }
}
console.log(result);