const person = {
    rate: 30,
    salary: ''
};

Object.defineProperty(person, 'rate', {
writable: true,
enumerable: false,
configurable: false
});

Object.defineProperty(person, 'salary', {
writable: true,
configurable: true
});

Object.defineProperty(person, 'salary', {
   get() {
    if(!this.rate){
        return 0;
    }
    return this.rate * new Date().getDate();
}
    })

//person.rate = 30;
//person.salary;
// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300

