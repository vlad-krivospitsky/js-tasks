
function checkSpam(source, example) {
    if(typeof source === 'string' && typeof example === 'string' && source !== '' && example !== '') {
    let a = source.toLowerCase();
    let b = example.toLowerCase();
    if(a.includes(b)) {
        return true
    } else {
        return false
    }
    } else {
        throw new Error('Проверьте тип данных или ваша строка пустая')
    }
}
checkSpam('pitterXXX@gmail.com', 'xxx');

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;