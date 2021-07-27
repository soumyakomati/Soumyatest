function f (y) {
    let x= 1;
    // x and function g are called everytime when we call f()
    function g() {
        console.log('g is called');

    }
    return g;
}

const h = f(10); //copy by reference -> g function is returned as hence remains in memory

h();

f.x = 1000;

console.clear();

let x = 1;

function outer() {
    let y = 2;
    let x = 3;
    console.log('x value in function is :' +x);
    return x;
}

console.log('x value is :' +x);
outer ();

console.log('x value is :' +x);