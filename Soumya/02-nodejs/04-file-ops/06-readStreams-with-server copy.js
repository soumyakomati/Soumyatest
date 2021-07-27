const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => { 
    const rs= fs.createReadStream(path.join(__dirname, '' ,'sample.txt'),{encoding:'utf8'});

    //tells what to do with the data when it reads
    rs.on('data' , ((chunk) =>{
        res.write(chunk);
    }));

    //inform what to be done after reading all contents
    rs.on('end' ,() =>{
        res.end();
    })
    rs.read();
});

console.log('End of this file');
server.listen(3000); 