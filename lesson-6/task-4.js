
/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */
const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

const result = some(array, function (item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;

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