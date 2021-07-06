function foo( p, q ) {
    // in Node.js the function context by default is the global object
    console.log( this );
    console.log( p );
    console.log( q );
}

// foo();

// context, arguments...
foo.call( { x : 100 }, 100, 200 );

// "Duck typing" (borrowing this)

console.clear();

function outer() {
    console.log( 'outer function, this = : ', this );
    let that = this;

    // maintains its own context (default context - global object)
    const inner1 = function() {
        console.log( 'old syntax inner function, this = : ', this );
        console.log( 'outer function context used within inner function, that = ', that );
    };
    
    inner1();

    // gets its context from the enclosing function (its adopts the outer function context)
    const inner2 = () => {
        console.log( 'new syntax inner function, this = : ', this );
    };

    inner2();
}

outer.call( { x : 100 } );
