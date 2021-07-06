const john = {
    'full name': 'John',
    age: 32,
    children: [
        { name: 'Johnny', age: 8 },
        { name: 'Jinny', age: 5 }
    ],
    address: {
        firstLine: '123, Rosewll',
        city: 'Tampa'
    },
    company: 'XYZ',
    // celebrateBirthday: function() {
    //     console.log( 'Happy birthday John' );
    // }
    celebrateBirthday() { // shorter syntax in ES2015
        this.age++;
        // console.log( this ); // john (calling object)
        console.log( `Happy birthday ${this['full name']}. You are ${this.age} years old.` );
    },
    addChild( child ) {
        this.children.push( child );
    }
};

john.celebrateBirthday();
john.addChild({
    name: 'Jack',
    age: 1
});

console.log( john );

const jane = {
    'full name': 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane );
console.log( jane );