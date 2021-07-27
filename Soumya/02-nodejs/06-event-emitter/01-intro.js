function sumAsync( x, y, callback ) {
    if (typeof x !=='number'|| typeof y !=='number'){
        callback(new Error('Both args must be number'));
    }
    else {
    setTimeout(() => {
        const result = x + y;

        callback ( null,result );

    }, 2000);
    }
    console.log( 'end of sumAsync function' );
}

sumAsync( 12, 13, ( err,result ) => {
    if (err) {
        console.log( 'err is ', err ); 

    } else{
    console.log( 'result is ', result ); 
}
});