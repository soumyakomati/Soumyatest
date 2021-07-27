const http = require('http');
const url = require('url');
const fs = require('fs');
//path module is used for converting either cases in path / or \ as it is different in mac and linux  over windows
const path = require('path');


const server = http.createServer((req,res) => { 
   const parts = url.parse(req.url,true); 
   
   console.log(parts);

   console.log( 'pathname' +parts.pathname);
    if ( parts.pathname ==='/index.html')
        fs.readFile(path.join(__dirname, '' ,'index.html' ),{encoding:'utf8'}, (err,contents) =>{
        if (err) {
            console.log(err.message); 
            res.statusCode =500;
            res.end(err.message);
        }
        console.log(contents.toString());
        res.end( contents);
    })
    else if ( parts.pathname==='/contact.html')
        fs.readFile(path.join(__dirname, '' ,'contact.html' ),{encoding:'utf8'}, (err,contents) =>{
        if (err) {
            console.log(err.message); 
            res.statusCode =500; 
            res.end(err.message);
        }
        console.log(contents);
        res.end(contents);})
    else {res.statusCode =401
        res.end();}

});

server.listen(3000); 