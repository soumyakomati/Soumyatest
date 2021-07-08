process.on( 'uncaughtException', err => {
    console.log( err.message );
});

// array of command line arguments
console.log( process.argv );
const num1 = +process.argv[2];
const num2 = +process.argv[3];

console.log( num1 + num2 );

// read-only access to environment variables
console.log( process.env.PATH );

// common environment variables
// NODE_ENV="production"/"development"
// PORT=3000

console.log( process.env.PORT );

if( process.env.NODE_ENV === 'production' ) {

} else if ( process.env.NODE_ENV === 'development' ) {

}

// stopes the Node.js process - use only on fatal errors (you cannot continue executing further)
// process.exit( 0 );

try {
    foo(); // exception is caught
} catch( err ) {
    console.log( 'err is ', err.message );
}

console.log( 'after catch' );

foo(); // uncaught exception

console.log( 'end of script' );