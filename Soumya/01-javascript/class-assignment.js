const movie = {
    name : 'DLL'
    , cast : ['Divya','Nikitha','Darshika','Feby'],
    yearOFRelease : 2021,
    boxOfficeCollection :100000
    , addToCast(newMember) {
            this.cast.push( newMember );
        }
    ,addToCollection(amount) {
        for (i=0;i<7;i++) {
            this.boxOfficeCollection+=amount[i];            
        }
    }
}

console.log(movie);
movie.addToCast('Soumya');
console.log(movie);

movie.addToCollection([100,2000,1,5,10,25,30000]);
console.log(movie);

console.clear();

function square(x) {
    return x*x
}

console.log(square(9));

console.clear();

function sum(x,y){
    return x+y
}

function sumOfSquares (x,y) {
    return x*x + y*y
}

function multiply(x,y){
    return x*y
}

function getTransform(x,y,transform){
    return transform(x,y)
}
console.log( getTransform( 2, 3, sumOfSquares ) );

console.clear();

function exponentFactory(x) {
    
    function square(x){
        return x*x;
    }
    function cube(x){
        return x*x*x;
    }
    function identity(x){
        return x;
    }
    if (x ===2) 
    return square(x);
    else if (x===3) 
    return cube(x);
    else 
    return identity(x);
}
console.log( exponentFactory( 5 ) );

console.clear();

//--18
 const addTo =(x)=>{
    return addmore= y=>x+y
}

var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung'
   },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
   ];

   
var phoneNames = phones.map( x=> x.name );
console.log( phoneNames );

const newPhones = phones.filter( x => x.type ==='new' );
console.log( newPhones );

console.clear();


const phonePrice = phones.find( x => x.price < 440 );
console.log( phonePrice );
//when not use arrow functions
/*Arrow functions don't have the arguments object. Therefore, if you have a function that use arguments object, you cannot use the arrow function.
Harder to debug and no self referncing
Object methods,Callback functions with dynamic context,When it makes your code less readable*/

//when to use arrow
/* Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.

Despite the fact that they are anonymous, I also like using them with methods such as map and reduce, because I think it makes my code more readable. To me, the pros outweigh the cons*/

console.clear();

const payroll = {
    employees: [
    { name: 'John', dept: 'IT', salary: 1000 },
    { name: 'Maria', dept: 'Finance', salary: 2000 },
    { name: 'David', dept: 'Finance', salary: 3000 }
    ],
    hikePercentage: {
    IT : 10,
    Finance: 20
    },
    raise: function() {
    this.employees.forEach( emp = ( employee ) => {
    const dept = employee.dept;
    const salary = employee.salary;
    const hikePercentage = this.hikePercentage[dept];   
    employee.salary = ( ( 100 + hikePercentage ) / 100 ) * salary;
    });
    }
   }

   payroll.raise();
   console.log( payroll.employees );