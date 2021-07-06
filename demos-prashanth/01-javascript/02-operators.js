// ==, === (use this)
console.log( 2 == 1 + 1 );
console.log( 2 === 1 + 1 );

console.log( '"1" === 1', "1" === 1 );
console.log( '"1" !== 1', "1" !== 1 );

// Not good - reports true
console.log( '"1" == 1', "1" == 1 );

// !, &&, ||
// <, >, <=, >=, !=, !== (preferred - opposite value of ===)

console.log( 1 < 2 );
console.log( 1 < 2 && 2 < 3 );

console.log( 1 < 2 ? 'one is less than two' : 'one is NOT less than two' );