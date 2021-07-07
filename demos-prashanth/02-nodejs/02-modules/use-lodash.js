// keeps going up the folder hierarchy till node_modules is found
const lodash = require( 'lodash' );

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Tampa'
    }
};

const jonathan = john;
const jonathanCopy = { // addresses are same
    ...john
};
const johnProperCopy = lodash.cloneDeep( john ); // addresses are NOT same

johnProperCopy.address.city = 'New York';

console.log( john );