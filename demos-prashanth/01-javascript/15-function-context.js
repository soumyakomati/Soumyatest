function foo( p, q ) {
    // in Node.js the function context by default is the global object
    console.log( this );
    console.log( p );
    console.log( q );
}

// foo();

// context, arguments...
foo.call( { x : 100 }, 100, 200 );

// "Duck typing"