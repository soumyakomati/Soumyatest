const http = require('http');
const fs = require('fs');
const path = require('path');

const ws = fs.createWriteStream(path.join(__dirname, 'sample.txt'));

const server = http.createServer((req,res) => { 
    const rs= fs.createReadStream(path.join(__dirname, '' ,'hello.txt'),{encoding:'utf8'});

    //tells what to do with the data when it reads
    rs.on('data' , ((chunk) =>{
        ws.write(chunk);
    }));

    //inform what to be done after reading all contents
    rs.on('end' ,() =>{
        ws.end();
    })

    rs.on('error',err =>{
        ws.statusCode=500;
        ws.end('Internal Server Error');
    });
    rs.read();
});

console.log('End of this file');
server.listen(3000); 