function sumAsync( x, y, callback ) {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        
        // callback( { message: 'both arguments must be numbers' } )
        callback( new Error( 'both arguments must be numbers' ) );
        
        return;
    }

    setTimeout(() => {
        const result = x + y;
        callback( null, result );
        // return result; // useless to return
    }, 2000);
}

sumAsync( 'hello', 13, ( err, result ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( 'result = ', result );
});