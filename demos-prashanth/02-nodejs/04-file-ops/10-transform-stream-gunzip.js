const fs = require( 'fs' );
const path = require( 'path' );
const { createGunzip } = require( 'zlib' );

const gunzip = createGunzip();
const rs = fs.createReadStream( path.join( __dirname, 'hello.copy.txt' ) );
const ws = fs.createWriteStream( path.join( __dirname, 'hello.uncompressed.txt' ) );

rs.pipe( gunzip ).pipe( ws );

rs.on( 'error', err => {
    console.log( 'Unable to read : ', err.message );
});

ws.on( 'error', err => {
    console.log( 'Unable to write : ', err.message );
});