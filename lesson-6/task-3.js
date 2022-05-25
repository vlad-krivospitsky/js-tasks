/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const every = (innerArr, callback) => {
    const isValid = Array.isArray(innerArr) && typeof callback === 'function';

    if (!isValid) {
        throw new Error('Arguments is not valid')
    }
    for (let i = 0; i < innerArr.length; i++) {
        callback(innerArr[i], i, innerArr);
    }
}
const array = [1, 2, 3, 4, 5, 6];
const result = every(array, (item, index, arrayRef) => {
    console.log(item, index, arrayRef);
});

console.log(result);