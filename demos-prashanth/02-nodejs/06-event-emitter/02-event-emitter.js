const EventEmitter = require( 'events' );

function sumAsync( x, y ) {
    const ee = new EventEmitter();

    if( typeof x !== 'number' || typeof y !== 'number' ) {
        // process.nextTick() or setTimeout( fn, 0 ) can be used
        // NOTE: process object is available to every Node.js script
        process.nextTick(() => {
            ee.emit( 'error', new Error( 'both arguments must be numbers' ) );
        });
    } else {
        process.nextTick(() => {
            const result = x + y;
            ee.emit( 'data', result );
        });
    }

    return ee;
}

const ee1 = sumAsync( 12, 13 );
const ee2 = sumAsync( 14, 15 );

const onError = err => {
    console.log( err.message );
};

const onSuccess = data => {
    console.log( 'result is ', data );
}

ee1.on( 'error', onError );
ee2.on( 'error', onError );

ee1.on( 'data', onSuccess );
ee2.on( 'data', onSuccess );