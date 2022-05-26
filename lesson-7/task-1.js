/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 * 
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


//const result = inspect(array);
//console.log(result); // [ 7, 11, 7, 12 ]
//

const array = [false, 'Привет.', 2, 'Здравствуй.', [], 'Прощай.', {name: 'Уолтер', surname: 'Уайт'}, 'Приветствую.'];

const isValid = Array.isArray(array);

if(isValid) {
    function inspect(arr) {
        let newArr = [...arr]
        let filterStr = newArr.filter(item => typeof item === 'string');
        let result = filterStr.map(el => el.length);
        return result;
    } 
} else {
    throw new TypeError('The argument is not an array')
}

inspect(array);
