function isEven(num) {
  if(typeof num === 'number') {
      num % 2 === 0 ? 
    console.log(true):console.log(false);
  } else {
      throw new Error('Error: parameter type is not a Number')
  }
}
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

exports.isEven = isEven;