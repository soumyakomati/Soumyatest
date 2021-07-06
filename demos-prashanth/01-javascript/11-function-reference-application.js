function square( x ) {
    return x * x;
}

function cube( x ) {
    return x * x * x;
}

function same( x ) {
    return x;
}

function sumAll( arr, transform ) {
    let result = 0;

    for( let i = 0; i < arr.length; i++ ) {
        result += transform( arr[i] );
    }

    return result;
}

// arr = [ 1, 2, 3, 4, 5 ], transform = square (copied by reference)
console.log( sumAll( [ 1, 2, 3, 4, 5 ], square ) );

// arr = [ 1, 2, 3, 4, 5 ], transform = cube (copied by reference)
console.log( sumAll( [ 1, 2, 3, 4, 5 ], cube ) );

console.log( 
    sumAll(
            [ 1, 2, 3, 4, 5 ],
            // creating a function using a function expression -> no need to declre this beforehand!
            function( x ) {
                return x;
            } 
    ) 
);