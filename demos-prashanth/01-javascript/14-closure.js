function outer( x ) {
    return function() { // inner function carries with it the enclosing scope (all the variables in the enclosing scope)
        x++;
        console.log( 'x = ', x );
    };
}

let inner = outer( 100 ); // after outer() finishes execution, the local variables are destroyed (x is destroyed)

inner(); // will x be accessible???? - YES (101)
inner(); // will x be accessible???? - YES (102)
inner(); // will x be accessible???? - YES (103)

// Aside: this logs the inner function that is returned
// console.log( outer() );

let inner2 = outer( 200 ); // inner2 has access to a separate x created when outer is called now

inner2(); // 201
inner2(); // 202
inner2(); // 203

inner(); // 104 
inner(); // 105
inner(); // 106

inner2(); // 204
inner2(); // 205
inner2(); // 205

// it is good practice to release the function when you do not require it anymore so that the function and its closure is released
inner = null; // the function and variable will be ready for garbage collection
inner2 = null;