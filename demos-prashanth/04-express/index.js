const express = require( 'express' );
const indexRouter = require( './routes/' ); // by default the index file is imported
const path = require( 'path' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );

app.use( indexRouter );

// EXERCISE
// sendFile( path.join( __dirname, ... ) ) on /contact

// 404 error handler (if no other route matches this will and it serves an error response)
// We do not specify the path here - so for every request this shall be matched (if none of the earlier ones matched)
app.use( ( req, res ) => {
    res.status( 404 );
    res.send( 'Page not found' );
});

app.listen( 3000, ( err ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( 'Server started on http://localhost:3000' );
});