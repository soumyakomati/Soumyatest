const express = require( 'express' );
const indexRouter = require( './routes/' ); // by default the index file is imported
const loggerRouter = require( './middleware/logger' ); // by default the index file is imported
const errorRouter = require( './middleware/error' ); // by default the index file is imported
const path = require( 'path' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

app.use( loggerRouter );

// req.body (JS object)
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( express.static( path.join( process.cwd(), 'public' ) ) );
app.use( indexRouter );

app.use( errorRouter );

app.listen( 3000, ( err ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( 'Server started on http://localhost:3000' );
});