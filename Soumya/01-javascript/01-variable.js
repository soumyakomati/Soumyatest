let x = 1.5; //number
console.log(typeof x); //'number'

let greeting ='Hello world';
console.log(typeof greeting); 

let name = 'John';
let greeting2 = `Hello ${name}`;
console.log(greeting2);


let greeting1 = `Hello "Doe"`;
console.log(greeting1);

console.log(greeting1.length);
console.log(greeting1[0]);
console.log(undefined);


console.log(greeting1[50] == undefined);
//2 types of euality checks, === checks for type and value, where == doesnt check for type
console.log(greeting1[50] === undefined);