const { Counter } = require( './03-counter-class-event-emitter' );

const counter = new Counter();

// let flag = true;

counter.on( 'second', ( numberOfSeconds ) => {
    // do something
    // if( flag ) { 
        console.log( numberOfSeconds );

        if( numberOfSeconds === 10 ) {
            counter.stop();
        }

        // flag = false;
        // fs.readFile( , , () => {
        //     flag = true;
        // })
    // }
});

counter.on( 'second', ( numberOfSeconds ) => {
    // do something else
});

counter.on( 'stop', () => {
    
})

counter.start();