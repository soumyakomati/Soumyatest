console.log( 'start of use-arithmetic.js' );

// use relative paths for custom modules
// const arithmetic = require( './subfolder/arithmetic' );
const { subtract : diff, multiply } = require( './subfolder/arithmetic' );

const arithmetic2 = require( './subfolder/arithmetic' );

console.log( diff( 12, 13 ) ); // -1
console.log( arithmetic2.subtract( 12, 13 ) ); // -1
console.log( arithmetic2.add( 12, 13 ) ); // error

console.log( 'end of use-arithmetic.js' );