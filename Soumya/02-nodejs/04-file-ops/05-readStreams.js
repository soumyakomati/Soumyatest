//streams are used to read file chunk by chunk size andprocess it
//readFile reads larger files and may crash memory
//response.write is used to read chunk and send as output, and we end it using response.end()

const fs = require('fs');
const path = require('path');
//creates straw
const rs= fs.createReadStream(path.join(__dirname, '' ,'sample.txt'),{encoding:'utf8'});
//tells what to do with the data
rs.on('data' , ((chunk) =>{
    console.log(chunk);
}));
//start consuming data
rs.read();

// console.log(__dirname);
// console.log(__filename);
// fs.readFile(path.join(__dirname, '' ,'sample.txt'),{encoding:'utf8'}, (err,contents) =>{
//     if (err) {
//         console.log(err.message); 
//         return;
//     }
//     console.log(contents);
//     //post processing goes here
// });


console.log('End of this file');