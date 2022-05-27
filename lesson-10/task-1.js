/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

function bind(func, obj, param1, param2) {
    if (typeof func !== 'function' && typeof obj !== 'object') {
        throw new TypeError('Error')
    } else {
        return function () {
            const id = Date.now().toString()
            obj[id] = func
            const result = obj[id](param1, param2)
            delete obj[id]
            return result
        }
    }
}

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}
const user = {
    name: 'Walter',
    getName
};

const oliver = {
    name: 'Oliver'
};

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); 
console.log(boundedGetName()); 