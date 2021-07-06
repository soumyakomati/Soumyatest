// JavaScript objects are dynamic (add and remove properties at will)
// You DO NOT need a class to define an object

// object literal syntax 
const john = { // creating a new object
    'full name': 'John',
    age: 32,
    children: [
        { name: 'Johnny', age: 8 },
        { name: 'Jinny', age: 5 }
    ],
    address: {
        firstLine: '123, Rosewll',
        city: 'Tampa'
    },
    company: 'XYZ'
};

const age = john.age;
console.log( age );

// use [] syntax and NOT . syntax to access propeties whose names have special characters
const fullName = john['full name'];
console.log( fullName );

console.log( john['address'].city );
console.log( john.address.city );
console.log( john.children[1]['name'] );
console.log( john.children[1].name );

john.name = 'Jonathan'; // add a new property
john.age++; // exists -> hence we can modify

console.log( john );

delete john.company;

console.log( john );

// john = 123; // error

