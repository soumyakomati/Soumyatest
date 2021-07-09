const express = require( 'express' );
const indexRouter = require( './routes/' ); // by default the index file is imported
const path = require( 'path' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

// logger middleware
app.use( ( req, res, next ) => {
    res.locals.receivedDate = new Date();
    next();
    console.log( 'response is being sent 1' );
});

app.use( function dateLogger( req, res, next ) {
    console.log( 'New request received at time ', res.locals.receivedDate.toTimeString() );
    
    // res.write(); // ok even if we call next
    next();

    console.log( 'response is being sent 2' );
    console.log( 'New request received at time ', (new Date()).toTimeString() );

    // if we send an end of response message, then no further middleware is called
    // res.end( res.locals.receivedDate.toString() );
});

// req.body (JS object)
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( express.static( path.join( process.cwd(), 'public' ) ) );
app.use( indexRouter );

// app.use( '/data', ( req, res ) => {
//     res.json( req.body );
// });

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