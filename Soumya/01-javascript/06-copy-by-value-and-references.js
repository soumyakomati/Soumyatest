let x = 1;
let y= x;

x++;
console.log(x);
console.log(y);


let john = {
    name : 'John'
};
 let jonathan = john;

 john.name ='Johnny';
console.log(john);
console.log(jonathan);


const number = [1,2,3,];
const numberCopy = number;
number.push(4);
console.log (numberCopy);


function sum (x,y) {
    x++;
    return x+y;
}
console.clear();

let a = 12, b = 13 ;
console.log(sum(a,b)); //(copy by value)
console.log(a,b);