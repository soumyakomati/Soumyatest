const fs = require( 'fs' );
const path = require( 'path' );

// create a straw for writing little by little
const ws = fs.createWriteStream( path.join( __dirname, 'output.txt' ) );

ws.write( 'Line 1' );
ws.write( '\n' );
ws.write( 'Line 2' );

// 'error' event
// both res (ServerResponse), ws (WritableStream) are both stream objects - they have write(), end() methods
// both req (IncomingMessage), rs (ReadStream) are both readable stream objects - read(), events - 'data', 'end'

ws.end();