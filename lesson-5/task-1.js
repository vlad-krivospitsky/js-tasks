let str = 'pitter';

function upperCaseFirst(string) {
if(typeof string === 'string') {
    return(string[0].toUpperCase()+string.slice(1))
}  else{
   return('Введите строку')
}
}
upperCaseFirst(str)
// Решение

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;