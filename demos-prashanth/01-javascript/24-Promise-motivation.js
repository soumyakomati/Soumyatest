function sumAsync( x, y, cb ) {
    setTimeout(() => {
        const result = x + y;
        cb( result );
        // return result;
    }, 3000);
}

// callback hell (Christmas tree)
sumAsync( 12, 13, ( result ) => {
    console.log( 'result = ', result );

    sumAsync( result, 14, ( result2 ) => {
        console.log( 'result2 = ', result2 );

        sumAsync( result2, 15, ( result3 ) => {
            console.log( 'result3 = ', result3 );
        });
    });
});