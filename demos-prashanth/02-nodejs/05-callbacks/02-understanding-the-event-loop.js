console.log( 1 );

setTimeout(() => {
    console.log( 2 );
}, 2000);

console.log( 3 );

setTimeout(() => {
    console.log( 4 );
}, 2000);

console.log( 5 );

setTimeout(() => {
    console.log( 6 );
}, 1000);

console.log( 7 );

// gets into the event queue immediately
setTimeout(() => {
    console.log( 8 );

    setTimeout(() => {
        console.log( 10 );
    }, 500);
    
    setTimeout(() => {
        console.log( 11 );
    }, 1000);
}, 0);

console.log( 9 );

// CPU intensive tasks (Node.js unfriendly code) - Node.js gets very busy
for( let i = 0; i < 1e6; i++ ) {
    for( let j = 0; j < 1e4; j++ ) {
        ;
    }
}