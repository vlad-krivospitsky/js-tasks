const user = { 
    firstName: 'Marcus',
    lastName: 'Kronenberg'
    };

const userData = { 
    job: 'developer',
    country: 'Germany',
    lastName: 'Schmidt'
    };

function shallowMerge(obj1, obj2) {
 
    let cloneObj1 = Object.assign({}, obj1);
    let cloneObj2 = Object.assign({}, obj2);
    let mainObj = {...cloneObj1, ...cloneObj2};

    return mainObj;
}
Object.defineProperty(user, 'firstName', {
    writable: false
});

Object.defineProperty(userData, 'job', {
    configurable: false
});

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

//Object.getPrototypeOf(obj1, obj2)
//Object.getOwnPropertyDescriptors(obj1, obj2)

