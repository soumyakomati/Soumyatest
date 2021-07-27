function square (x) {
    return x*x;
}

function cube (x) {
    return x*x*x;
}


function identity (x) {
    return x;
}

/*function sumAll(arr) {
    let result = 0;
    for(let i = 0; i<arr.length;i++) {
        result += square(arr[i]);
    }
    return result
}

console.logsumAll([1,2,3,4,5]);*/

function sumAll(arr, transform) {
    let result = 0;
    for(let i = 0; i<arr.length;i++) {
        result += transform(arr[i]);
    }
    return result
}

console.log(sumAll([1,2,3,4,5],square));
console.log(sumAll([1,2,3,4,5],cube));
console.log(sumAll([1,2,3,4,5],identity));