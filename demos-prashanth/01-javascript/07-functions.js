// syntax #1: function declaration syntax
function sum( x, y ) {
    const result = x + y;
    return result;
}

const result = sum( 12, 13 );
console.log( 'result = ', result );

// syntax #2: function expression syntax
// RHS is called a "function expression"
const sum2 = function( x, y ) {
    return x + y;
};

console.log( 'result  of sum2( 12, 13 ) = ', sum2( 12, 13 ) );

console.clear();

// const sum3 = ( x, y ) => {
//     return x + y;
// };
const sum3 = ( x, y ) => x + y;
console.log( 'result of sum3( 12, 13 ) = ', sum3( 12, 13 ) );

const square = x => x * x;
console.log( square( 12 ) );