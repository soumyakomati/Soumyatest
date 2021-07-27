const johnDoe = {
    name : 'John doe',
    age : 23,
    dogs : ['Johnny','Tommy'],
    children : [
        {name : 'tim',age:8},
        {name : 'Tom', age: 10}
    ],
    address : { street : '15634 riley',
    city :'Overland Park'}
};

const name = johnDoe.name;
console.log(name);

console.log(johnDoe);

delete johnDoe.age;

console.log(johnDoe);