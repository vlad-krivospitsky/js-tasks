let arr = [1, 2, 3];

function f(arr) {
    if(typeof arr === 'object'){
    console.log(arr.splice(0, 1));
	if (arr.length != 0) {
		f(arr);
        }
    } else if(typeof arr === 'number' || typeof arr === 'string') {
        throw new Error('Error: parameter type should be an array')
    } else if(arr.length = 0){
        throw new Error(' Error: parameter can\'t be an empty')
    }
    }

f(arr);