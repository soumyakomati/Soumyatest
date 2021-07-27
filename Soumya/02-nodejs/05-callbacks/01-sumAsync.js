function sum(x,y,onResult) {
    //request node.js to execute after 2000ms, if there is something else in queue it continues with it
    setTimeout(()=> {
        console.log('in Async function');
        const result = x+y;
        onResult(result);

    },2000)
}

function test(x,y) {
    //request node.js to execute after 2000ms, if there is something else in queue it continues with it
    
        console.log('in Async test function');
        return x+y;
   
}

sum(12,13, (result)=>{
    console.log('result is '+ result);
});
console.log(test(13,15));

//if function doesnt have return statements, it is undefined

/* Assignment
in nodejs lab-guide
example 3 response cpde 34, set header 
example 4 ,6,7*/