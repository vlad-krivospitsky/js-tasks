/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */
const filter = (innerArr, callback) => {
    const isValid = Array.isArray(innerArr) && typeof callback === 'function';

    if (!isValid) {
        throw new Error('Arguments is not valid')
    }
    for (let i = 0; i < innerArr.length; i++) {
        callback(innerArr[i], i, innerArr);

    }
}

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];
const filteredArray = filter(array, (item, index, arrayRef) => {
    console.log(item, index, arrayRef);
    //return item === 'Добрый вечер!';
});

console.log(filteredArray);