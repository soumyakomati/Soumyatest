// primitive -> number, boolean, string, null, undefined, Symbol, bigint
// assignment is by value
let x = 1;
let y = x; // copy by value

x++; // does not affected y
console.log( x );
console.log( y ); // not affected

// non-primitive assignment is by reference
let john = {
    name: 'John'
};
let jonathan = john; // jonathan and john refer to the SAME object in memory

john.name = 'Johnny';
console.log( jonathan );

const numbers = [ 1, 2, 3 ];
const numbersCopy = numbers;

numbers.push( 4 );
console.log( numbersCopy );

function sum( x, y ) {
    x++;
    return x + y;
}

console.clear();

let a = 12, b = 13;
console.log( sum( a, b ) ); // x = a; y = b; (copy by value)
console.log( a, b );

function add( obj1, obj2 ) {
    obj1.value++;
    return obj1.value + obj2.value;
}

console.clear();

let o1 = { value: 12 }, o2 = { value: 13 };
console.log( add( o1, o2 ) ); // obj1 = o1; obj2 = o2; (copy by reference)
console.log( o1, o2 );