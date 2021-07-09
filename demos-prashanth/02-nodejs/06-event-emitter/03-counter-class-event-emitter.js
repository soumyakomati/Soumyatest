const EventEmitter = require( 'events' );

class Counter extends EventEmitter {
    constructor( /* interval, repeat */ ) {
        super();

        this.time = 0;
    }

    start() {
        this.id = setInterval(() => {
            this.time++;
            this.emit( 'second', this.time );
        }, 1000);
    }

    stop() {
        clearInterval( this.id );
        this.emit( 'stop', this.time );
    }
}

module.exports = {
    Counter
};