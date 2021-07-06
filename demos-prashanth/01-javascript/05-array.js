const x = [ ];
x.push( 10, 11, 12 ); // we are adding items to the exisying array
x.push( 13, 14, 15 );

console.log( x );

// let allows reassignment; const DOES NOT allow reassignment
// x = [ 100, 101, 102 ]; // error since x is const -> we are creating a new array and assigning afresh

console.log( x );

console.log( 'first item is ', x[0] );
console.log( 'number of items is ', x.length );
console.log( 'last item is ', x[x.length - 1] );

// we are assigning x itself (x = ... is NOT allowed)
// the array is still mutable! - its items can be edited
x[2] = 22;
console.log( 'third item is ', x[2] );

// pop(), shift(), unshift()
// add / remove items from anywhere in the array
// insert 10.5 between 10 and 11
// position = 1, how many to remove = 0, what to add
x.splice( 1, 0, 10.5 );

console.log( x );

// sort(), reverse(), slice(), concat()

console.clear();

const numbers = [ 1, 'Two', 3, [ 4, 5 ] ];
console.log( numbers[2] );
console.log( numbers[3][0] );
console.log( numbers[3][1] );

const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
];

// The function that we pass to sort
    // return -ve number if x should come before in sorted order
    // return 0 if x should both x and y are treated as equal
    // return +ve number if x should come after in sorted order
primes.sort(function( x, y ) {
    return x - y;
});

console.log( primes );