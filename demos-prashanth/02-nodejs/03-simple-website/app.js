const http = require( 'http' );
const url = require( 'url' );

// parseInt( "1" ); // 1
// +"1" // 1
// NaN === NaN (false);
// isNaN( parseInt( "abc" ) ); // true (how to check NaN)

const server = http.createServer(( req, res ) => {
    const parts = url.parse( req.url, true );
    console.log( parts );
    console.log( parts.pathname );
    console.log( parts.query );

    if( req.url === '/' ) {
        res.end( 'Home' ); // statusCode = 200
    } else if( req.url === '/contact' ) {
        res.end( 'Contact' );
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen( 3000 );