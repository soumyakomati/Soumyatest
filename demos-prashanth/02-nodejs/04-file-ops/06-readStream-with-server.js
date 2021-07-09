const fs = require( 'fs' );
const path = require( 'path' );

const http = require( 'http' );

const server = http.createServer(( req, res ) => {
    // create a straw
    // const rs = fs.createReadStream( path.join( __dirname, '../../..', 'documents/lab-guides/Nodejs - Lab Guide.pdf' ), { encoding: 'utf8' } );
    const rs = fs.createReadStream( path.join( __dirname, 'hello.txt' ), { encoding: 'utf8' } );

    // res.setHeader( 'Content-Disposition', 'attachment; filename="filename.pdf"' );
    // res.setHeader( 'Content-Type', 'application/pdf' );

    // informing what the stream should do when it sips 1 chunk
    rs.on( 'data', ( chunk ) => {
        res.write( chunk );
    });

    // informing what the stream should do when it has read all the contents
    rs.on( 'end', () => {
        res.end();
    });

    // if we do not handle error event an error is thrown and execution stops (function call stack clear)
    rs.on( 'error', err => {
        res.statusCode = 500;
        res.end( 'Internal server error' );
    });

    // start sipping
    rs.read();
});

server.listen( 3000 );

console.log( 'end of script' );