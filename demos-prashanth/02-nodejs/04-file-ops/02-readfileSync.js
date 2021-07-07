const fs = require( 'fs' );
const path = require( 'path' );

console.log( __dirname );
console.log( __filename );

// the callback function gets enqueued after the file is read
// error-first callbacks
// sync method (blocking) - NEVER USE THIS
try {
    const contents = fs.readFileSync( path.join( __dirname, '..', 'sample.txt' ), { encoding: 'utf8' } );
    console.log( contents ); // does not execute on error
} catch( err ) {
    console.log( err.message );
}

console.log( 'end of script' );