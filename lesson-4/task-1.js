let person = {
    salary: 'good salary'
}

currentDate = new Date().getDate();

if(30-currentDate >= 10) {
    console.log(person.salary)
} else{
    person.salary = 'bad salary'
    console.log(person.salary)
}