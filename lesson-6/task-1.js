/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const forEach = (innerArr, callback) => {
  const isValid = Array.isArray(innerArr) && typeof callback === 'function';
  
  if (!isValid) {
    throw new Error('Arguments is not valid')
  }
  for (let i = 0; i < innerArr.length; i++) {
    callback(innerArr[i], i, innerArr);
  }
}
const array = [1, 2, 3];
forEach(array, (item, index, arrayRef) => {
  console.log(item, index, arrayRef);
});











 









//--------------------------------------
// const array = [1, 2, 3];

// const forEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }
// if(Array.isArray(array)) {
//   forEach(array, (item, index, arrayRef) => {
//     console.log(item, index, arrayRef);
//   });
// } else {
//   throw new Error('The argument is not an array')
// }

//--------------------------------

