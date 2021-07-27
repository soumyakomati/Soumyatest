const EventEmitter = require('events');

function sumAsync( x, y ) {
    const ee = new EventEmitter();

    if (typeof x !=='number'|| typeof y !=='number'){
        process.nextTick(() => {
             ee.emit('error',new Error('Both args must be number'));
        });
    }
    else {
    setTimeout(() => {
        const result = x + y;
        ee.emit('data' , result);
    }, 2000);
    }
    return ee;
}

const ee = sumAsync('hello14',13);

//if error is being emitted, it has to be in set timeout to return error value
//if error to be returned and error happens as soon as executed, we need to set timeout for emit to be queued
//process.nextTrick is better over setTimout
//nexttick or settimeout will be executed after return
ee.on('error',err =>{
    console.log(err.message);
});

ee.on('data',data =>{
    console.log('result is '+data);
});