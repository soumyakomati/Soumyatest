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

class Athlete extends Person {
    constructor( name, age, sport, medals ) {
        super( name, age ); // calls the super class (Person) constructor
        this.sport = sport;
        this.medals = [ ];
    }

    addMedals( ...medals ) { // rest operator (gathered al args into array)
        this.medals.push( ...medals ); // spread operator (comma-separated values)
    }

    // celebrateBirthday() {
    //     // do more stuff
    //     super.celebrateBirthday();
    // }
}

const john = new Athlete( 'John', 32, 'Sprint' ); // An empty object created { }
john.celebrateBirthday();
john.growBy( 0.1 );
john.addMedals( 'Olympic Silver', 'Asian Games Gold' );
console.log( john.name ); // all data members are public
console.log( john );