const http = require( 'http' );

const pid = process.pid;

let counter = 1;
const server = http.createServer( ( req, res ) => {
    // for( let i = 0; i < 1e8; i++ ) {}
    for( let i = 0; i < 1000000000; i++ ); // waste cpu cycles

    process.stdout.write( `pid=${pid} count=${counter++}` );
    res.end( `Request handled by process with pid = ${pid}` );
});

const port = process.env.PORT || 3000;
server.listen( port );

server.on( 'listening', () => {
    console.log( `process with pid = ${pid} listening on port ${port}` );
});

server.on( 'error', () => {
    console.log( `error starting server on process with pid = ${pid}` );
});