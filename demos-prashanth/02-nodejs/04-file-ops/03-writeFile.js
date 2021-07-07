const fs = require( 'fs' );
const path = require( 'path' );

function writeToFile( contents, afterWrite ) {
    fs.writeFile( path.join( __dirname, 'hello.txt' ), contents, { encoding: 'utf8', flag: 'a' }, ( err ) => {
        if( err ) {
            console.log( err.message );
            return;
        }

        console.log( 'created hello.txt' );

        // do something after the file is written
        afterWrite();
    });
}

const fn1 = () => {
    console.log( 'wrote line 1' );
};

const fn2 = () => {
    console.log( 'wrote line 2' );
};

writeToFile( 'It is summer', fn1 );
writeToFile( 'It shall be monsoon soon', fn2 );

console.log( 'end of script' );