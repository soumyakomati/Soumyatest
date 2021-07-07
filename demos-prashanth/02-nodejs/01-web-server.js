// import http from 'http'; // ES2015 (ES Modules - we shall not use this)
const http = require( 'http' ); // 2010 (CommonJS modules)

// NOTE: DO not create any large functions in terms of lines of code (and execution time)
const server = http.createServer(( req, res ) => {
    // send the string and end the HTTP response
    res.end( (new Date()).toString() );
});

server.listen( 3000 );

console.log( 'end of script' );