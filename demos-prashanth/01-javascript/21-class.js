class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
        this.height = 5;

        // returns newly created object by default
        // return this;
    }

    celebrateBirthday() {
        this.age++;
    }

    growBy( ft ) {
        this.height += ft;
    }
}

const john = new Person( 'John', 32 ); // An empty object created { }
john.celebrateBirthday();
john.growBy( 0.1 );
console.log( john );
console.log( john.name ); // all data members are public