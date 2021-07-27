function outer( x ) {
    return function () {
        x++;
    console.log('x value is:' + x);
    }
}

let inner = outer(100);

//console.log('x value is after:' + x);
inner(); // x value is still accessible
inner();

inner = null;

//inner();
