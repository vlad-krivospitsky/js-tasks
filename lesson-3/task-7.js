function getDivisors(num) {
    if(typeof num === 'number' && num > 0) {
        let result = [];

        for(let i = 1; i <= num; i++) {
            if(num % i === 0) {
                result.push(i)
            }
        }
        return result;
    } else if (!(typeof num === 'number')){
        throw new Error('Error: parameter type is not a Number')
    } else if(num === 0) {
        throw new Error('Error: parameter can\'t be a 0')
    }
}

getDivisors(12);