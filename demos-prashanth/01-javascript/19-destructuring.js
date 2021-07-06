const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const first = days[0], second = days[1], fifth = days[4];
const [ first, second, , , fifth ] = days;
console.log( first, second, fifth );

const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@example.com'
    ],
    address: {
        city: 'Tampa',
        zipCode: 12345
    }
};

// const name = john.name, age = john.age, city = john.address.city, code = john.address.zipCode;
const { name : fullName, age, address : { city, zipCode : code }, emails : [ , secondEmail ] } = john;
console.log( fullName, age, city, code, secondEmail );