//module is js file which we can import or export


//moduleo bject is defaultly available in any file
console.log(module.exports);// empty object initially 
// acts as messenger objects which will be avilable for others

const pi = Math.PI ;

const add= (x,y) => x+y;
const subtract= (x,y) => add(x,-y);
const multiply = (x,y) =>x*y;
const divide = (x,y) =>x/y;


class Complex{
    constructor (real,imaginary){
        this.real = real;
        this.imaginary= imaginary;
    }
}

module.exports = {
    subtract: subtract, //this makes the function available to export
    multiply: multiply,
    divide : divide,
    add,
    Complex: Complex
}