let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

function f(dayNum) {
    if(typeof dayNum === 'number' && dayNum > 0 && dayNum < 8) {
      return(daysOfWeek[dayNum - 1])
    } else if (dayNum < 1 || dayNum > 7) {
        throw new Error('Error: parameter should be in the range of 1 to 7')
    } else {
        throw new Error('Error: parameter type is not a Number')
    }
}
f(5)