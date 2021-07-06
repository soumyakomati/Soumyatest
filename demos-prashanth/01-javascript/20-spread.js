// Spread operator (...)
let numbers = [ 1, 2, 3 ];

const numbersCopy = numbers;
numbersCopy.push( 4 );
console.log( numbers );

// [ numbers[0], numbers[1], numbers[2] ] -> a proper copy is made for items that are primitives
numbers = [ 1, 2, 3 ]; // reset the array
const numbersProperCopy = [ ...numbers ];
numbersProperCopy.push( 4 )

console.log( numbers );

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Tampa'
    }
};

const johnCopy = john;
const johnProperCopy = {
    ...john, // name: john.name (by value), age: john.age (by value), address: john.address (by reference)
    address: {
        ...john.address // city: john.address.city (by value)
    }
};

johnProperCopy.name = 'Jonathan';
johnProperCopy.address.city = 'New York'; // affects john.address.city
console.log( john );