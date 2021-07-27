const fs = require('fs');
//path module is used for converting either cases in path / or \ as it is different in mac and linux  over windows
const path = require('path');

//__dirname
//__filename

console.log(__dirname);
console.log(__filename);

//fs.readFile('sample.txt');

//. single dot or null means same folder, .. is for parent folder, /.. child folder

//this function is queued after file is read
//error first callbacks
//asynch method
fs.readFile(path.join(__dirname, '' ,'sample.txt'),{encoding:'utf8'}, (err,contents) =>{
    if (err) {
        console.log(err.message); 
        return;
    }
    console.log(contents);
    //post processing goes here
});


console.log('End of this file');