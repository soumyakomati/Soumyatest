function f( y ) {
    // x is created everytime we call f()
    let x = 1;
    
    return function() {
        console.log( 'g called' );
    };
}

// f.x = 1000; // function are also objects -> they can have their own properties

const h = f( 10 ); // h = g (copy by reference -> g function is returned as hence remains in memory)

h();