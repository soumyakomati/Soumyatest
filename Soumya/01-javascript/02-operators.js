console.log(2 == 1+1);
console.log(2 === 1+1);

//not good practice
console.log("'1' == 1", '1' == 1);
console.log("'1' === 1",'1' === 1);

// ?: ternanry operator, which is if else 
//exampel 
console.log( 1<2 ? 'one is less than two':'One is not less than two');

const primes = [2,3,5,7,11,13,17,19,23,29,31];
primes.sort(function(y , x) {
     return y-x
    });

    console.log(primes);

    const primes1 = ["test","soumya","apple"];
primes1.sort(function(y , x) {
    // return y-x
    });

    console.log(primes1);
    console.log(primes1.sort());