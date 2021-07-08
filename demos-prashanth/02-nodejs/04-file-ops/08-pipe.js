const fs = require( 'fs' );
const path = require( 'path' );

const rs = fs.createReadStream( path.join( __dirname, 'hello.txt' ), { encoding: 'utf8' } );
const ws = fs.createWriteStream( path.join( __dirname, 'hello.copy.txt' ), { encoding: 'utf8', flags: 'wx' } );

// more than reading a chunk and writing a chunk, and closing at last
// handles backpressure (writing is slower than reading, and issuing the write() statament may not write to file immediately - we need to take feedback from write stream and pause and resume reading)
rs.pipe( ws );

rs.on( 'error', err => {
    console.log( 'Unable to read : ', err.message );
});

ws.on( 'error', err => {
    console.log( 'Unable to write : ', err.message );
});