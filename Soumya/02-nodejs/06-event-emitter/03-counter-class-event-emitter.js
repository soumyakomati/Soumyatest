const EventEmitter = require('events');

// extending evenemitter class to poll something in particular event 
class Counter extends EventEmitter{
    constructor(){
    super();
    this.time=0;
    }

    start(){
        setInterval(()=>{
            this.time++;
            this.emit('second',this.time);
        },1000);
    }
    stop(){

    }
}
module.exports = {
    Counter
};
