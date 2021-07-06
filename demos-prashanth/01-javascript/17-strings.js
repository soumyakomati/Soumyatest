let quote = 'With great power comes great responsibility';

console.log( quote.indexOf( 'power' ) );
console.log( quote.includes( 'great' ) ); // true
console.log( quote.includes( 'good' ) ); // false

console.log( quote.substr( 11, 5 ) );

console.log( "   hello world   ".trim() );

// strings are immutable -> hence such methids return new strings
quote = quote.replace( /great/g, 'good' );
console.log( quote );