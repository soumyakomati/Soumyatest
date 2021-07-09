const phones = [
    {
        name: 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung'
    },
    { name: 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name: 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name: 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name: 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name: 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];

// * Create a new array with the name of each phone. Thus the new array that should be generated
// would be [ 'Samsung Galaxy S10+ Plus', 'Apple iPhone 7 Plus', ... ]

// recommended way
const phoneNames = phones.map( item => {
    return {
        [item.name]: item.price
    };
});
console.log( phoneNames );

// not recommended
// const phoneNames2 = [];
// phones.forEach( ( item, idx ) => phoneNames2.push( item.name ) );
// console.log( phoneNames2 );


phones.forEach( ( item, idx ) => console.log( item.name, idx ) );

// * Create a new array with objects representing new phones
const newPhones = phones.filter( phone => phone.type === 'new' );
console.log( newPhones );