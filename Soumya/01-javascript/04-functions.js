//syntax #1 : function declaration syntax

function sum (x,y) {
    return x+y;
}

const result = sum (120, 130);
console.log(result);

//syntax #2 : function expression syntax

const sum2 = function (x,y) {
    return "x+y";
}
console.log(sum2(12,13));

const sum3 = function(){ // this function name is sum3
    return 'hellooooo';
  };
  console.log(sum3());

  const sum4 =  (x,y) => x+y;
console.log(sum4(12,13));