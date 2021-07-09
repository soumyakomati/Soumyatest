const express = require( 'express' );

const app = express();

app.listen( 3000, ( err ) => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( 'Server started on http://localhost:3000' );
});