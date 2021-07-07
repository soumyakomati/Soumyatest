function sumAsync( x, y, onResult ) {
    
    // request Node.js to execute the function after 2000 ms (2s)
    setTimeout(() => {
        // console.log( 'sumAsync inner function' );
        const result = x + y;

        onResult( result );

        // return result;
    }, 2000);

    console.log( 'end of sumAsync function' );
}

sumAsync( 12, 13, ( result ) => {
    console.log( 'result is ', result );
});