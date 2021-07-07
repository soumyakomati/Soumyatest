console.log( 'start of arithmetic.js' );

// module object is by default available in any file
console.log( module.exports ); // {}

const PI = 3.14;

const add = ( x , y ) => x + y;
// module.exports.subtract = ( x , y ) => add( x, -y );
const subtract = ( x , y ) => add( x, -y );
const multiply = ( x , y ) => x * y;
const divide = ( x , y ) => x / y;

class Complex {
    constructor( real, imaginary ) {
        this.real = real;
        this.imaginary = imaginary;
    }
}

// these things are available for other modules to use
module.exports = {
    subtract, // subtract: subtract
    multiply,
    divide,
    Cmplx: Complex
};

console.log( 'end of arithmetic.js' );