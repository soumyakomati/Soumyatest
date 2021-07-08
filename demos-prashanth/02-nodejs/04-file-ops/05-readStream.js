const fs = require( 'fs' );
const path = require( 'path' );

// create a straw
const rs = fs.createReadStream( path.join( __dirname, '../../..', 'documents/lab-guides/Nodejs - Lab Guide.pdf' ), { encoding: 'utf8' } );

let i = 1;

rs.on( 'data', ( chunk ) => {
    console.log( i );
    i++;
});

// start sipping
rs.read();

console.log( 'end of script' );