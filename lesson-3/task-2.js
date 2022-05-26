function f() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    } else {
      throw new Error('Error: all parameters should be a Number type')
    }
  }
  console.log(sum);
}

f(1, 2, 3) // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

//------------------------ (...rest)-------------------------------------

function f(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      sum += arguments[i];
    } else {
      throw new Error('Error: all parameters should be a Number type')
    }
  }
  console.log(sum);
}

f(1, 2, 3) // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type