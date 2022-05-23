function f(a, b, c) {
if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    let result = (a - b) / c;
    return result 
} else {
    return ('Error: all parameters type should be a Number');
}
}

f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number
exports.f = f;
