//expressjs.com
//it is a package
//res.locals is used to send to another midlleware from current middleware- RECOMMENDED
//process.cwd() will be used instead of __dirname as moving files effects the package
//app.set can be used across the application, use app.get to read value
//nodemon restarts file if there is chnage in file
//marble and winston to log the start ans stop of services
// connect to the DB at startup// connect to the DB at startup
// connect to the DB at startup
require( './data/init.js' ); 

const express = require( 'express' );
const path = require( 'path' );

const indexRouter = require( './routes/' ); // by default the index file is imported
const workshopsRouter = require( './routes/workshops' );
const loggerRouter = require( './middleware/logger' );
const errorRouter = require( './middleware/error' );
const { pageNotFound, errorHandler } = require( './middleware/error' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

app.use( loggerRouter );

// req.body (JS object)
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( express.static( path.join( process.cwd(), 'public' ) ) );
app.use( indexRouter );
app.use( '/workshops', workshopsRouter );

app.use( pageNotFound );
app.use( errorHandler );

app.listen( 3000, ( err ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( 'Server started on http://localhost:3000' );
});