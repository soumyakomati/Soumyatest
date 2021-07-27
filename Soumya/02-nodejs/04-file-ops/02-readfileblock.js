const fs = require('fs');
//path module is used for converting either cases in path / or \ as it is different in mac and linux  over windows
const path = require('path');


console.log(__dirname);
console.log(__filename);

//NEVER USE

//file contents prints before end of script
//blocking or synchnronous method
//use try catch blocks to handle sync methods, usually sync methods end with Sync
try {
    const contents= fs.readFileSync(path.join(__dirname, '' ,'samle.txt'),{encoding:'utf8'});
    console.log(contents);//doesnt execute an error
} catch(err) {
    console.log(err.message);
}

console.log('End of this file');