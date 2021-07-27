const {Counter} = require ('./03-counter-class-event-emitter.js');


const counter = new Counter();

counter.on('second',(numberOfSeconds)=>{
    console.log(numberOfSeconds);
});

counter.start();
