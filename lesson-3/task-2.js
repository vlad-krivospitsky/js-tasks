function f() {
let sum = 0;
for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  console.log(sum); 
}

f(1, 2, 3)