// ... -> rest operator (ES2015)
function foo( x, y, ...rest ) {
    console.log( 'x = ' + x );
    console.log( 'y = ' + y );
    console.log( 'rest = ', rest );
}

// ok!
foo( 12, 13, 14, 15, 16 );

// ok!
foo( 12 ); // x = 12, y -> uninitialized (undefined)