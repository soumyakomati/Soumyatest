function sumAsync( x, y ) {
    return new Promise(( resolve, reject ) => {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'both arguments must be numbers' ) );
            return;
        }

        setTimeout(() => {
            const result = x + y;

            resolve( result );
            // return result;
        }, 3000);
    });
}

// calling then() -> our way of asking the promise object to call the passed function when the result is available
sumAsync( 12, 13 )
    .then(( result ) => {
        console.log( 'result is ', result );
    })
    .catch(err => {
        console.log( err.message );
    });

sumAsync( 12, 'hello' )
    .then(( result ) => {
        console.log( 'result is ', result );
    })
    .catch(err => {
        console.log( err.message );
    });

console.log( 'end of script' );