process.on('uncaughtException' ,err=>{
    console.log(err.message);
})

// process.argv can take cmd line Args
//array of command line argumements
console.log(process.argv);

const num1 = +process.argv[2];
const num2 = +process.argv[4];

// console.log(num1+num2);

// read only access to environment variables


// console.log (process.env);

// common environment variables
// NODE_END ="production"/"development"
// PORT =3000

//process.exit stops the process and lines after that doesnt execute
//use only in case of fatal errors

// process.exit(0);
foo();
console.log('End of Script');