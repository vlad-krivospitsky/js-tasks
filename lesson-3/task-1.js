function f(num) {
    if(typeof num === 'number') {
        let result = Math.pow(num, 3)
        return(result)
    } else {
        return('Error: parameter is not a number type')
    }
}

f(2); // 8
f('Content'); // Error: parameter is not a number type
exports.f = f;

