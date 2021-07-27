const johnDoe = {
    'full name' : 'John doe',
    age : 23,
    dogs : ['Johnny','Tommy'],
    children : [
        {name : 'tim',age:8},
        {name : 'Tom', age: 10}
    ],
    address : { street : '15634 riley',
    city :'Overland Park'},
    //celebrateBirthday: function(){
      //  console.log('HAppy Birthday John');
   // }
   celebrateBirthday(){
    this.age++;
    console.log(this);
     console.log(`HAppy Birthday ${this['full name']}`);
  }
};

johnDoe.celebrateBirthday();

const jane= {
'full name' :'jane', age :29
};


johnDoe.celebrateBirthday.call(jane);
console.log(jane);