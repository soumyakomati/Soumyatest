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