// global -> use it anywhere
let x = 1;

console.log( 'x in global scope : ', x );

function outer() {
    let y = 2; // local to outer
    let x = 3; // local to outer ("shadows" the global x)

    function inner() {
        let x = 4; // local to inner (this "shadows" the outer x)
        let z = 4; // local to inner

        // accesses the local x
        console.log( 'x in inner scope : ', x );
        console.log( 'y in inner scope : ', y ); // comes from the outer scope
        console.log( 'z in inner scope : ', z );
    }

    inner();

    // accesses the local x
    console.log( 'x in outer scope : ', x );
    console.log( 'y in outer scope : ', y );
}

outer();
// console.log( 'y in global scope : ', y ); // error