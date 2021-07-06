const numbers = [ 2, 5, 8, 12, 15, 17 ];

// filter
const evenNumbers = numbers.filter( x => x % 2 === 0 );
console.log( evenNumbers );

// find
const firstEvenNumber = numbers.find( x => x % 2 === 0 );
console.log( firstEvenNumber );

// map (generated items is maintained at the same position - end result array has same length)
const squaredNumbers = numbers.map( x => x * x );
console.log( squaredNumbers );
console.log( squaredNumbers[0] );

// forEach
numbers.forEach( x => console.log( x ) );

console.log( numbers.filter( x => x % 2 === 0 ).map( x => x * x ) );

const days = [ 'Sun', 'Mon', 'Tues' ];
console.log( days.map( d => d + 'day' ) );