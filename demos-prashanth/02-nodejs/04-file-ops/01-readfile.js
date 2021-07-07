const fs = require( 'fs' );
const path = require( 'path' );

console.log( __dirname );
console.log( __filename );

// the callback function gets enqueued after the file is read
// error-first callbacks
// async method
fs.readFile( path.join( __dirname, '..', 'sample.txt' ), { encoding: 'utf8' }, ( err, contents ) => {
    if( err ) {
        console.log( err.message );
        return; // don't forget it
    }

    console.log( contents );

    // anything you would like to do with the contents may be done here
});

console.log( 'end of script' );