function sum( x , y ) {
    return x + y;
}

// add and sum refer to the SAME function in memory
// functions are non-primitive (copied by reference)
const add = sum;