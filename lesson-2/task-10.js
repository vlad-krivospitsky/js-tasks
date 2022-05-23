const arr = [6, 5, 4, 3, 2, 1];

function sort(arr) {
    let sorted = [];
    let min = Infinity;
    let minIndex = Infinity;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min ) {
                min = arr[i];
                minIndex = i;
            }
        }
        arr[minIndex] = Infinity;
        sorted.push(min);
        min = Infinity;
    }
    return sorted;
}
    sort(arr)