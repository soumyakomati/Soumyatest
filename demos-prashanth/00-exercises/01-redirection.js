const http = require( 'http' );

const server = http.createServer(( req, res ) => {
    if( req.url === '/short' ) {
        res.statusCode = 307;
        res.setHeader( 'Location', 'https://wikipedia.org' );
    }

    res.end();
});

server.listen( 3000 );

console.log( 'end of script' );