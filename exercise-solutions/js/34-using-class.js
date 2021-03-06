class Movie {
    constructor( name, cast, yearOfRelease, boxOfficeCollection ) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast( newMember ) {
        this.cast.push( newMember );
    }

    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
}

var war = new Movie( 'War', [], 2019, 250 );
var joker = new Movie( 'Joker', [], 2019, 2500 );

war.addToCast( 'Hrithik' );
joker.addToCollection( 250 );

console.log( war );
console.log( joker );
