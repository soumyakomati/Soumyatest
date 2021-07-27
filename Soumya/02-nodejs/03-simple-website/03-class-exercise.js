const http = require('http');
const url = require('url');
const arithmetic = require('../02-modules/arithmetic.js');


const server = http.createServer((req,res) => { 
   const parts = url.parse(req.url,true); 
   
   console.log(parts);

   const x = parts.query.x;
   const y = parts.query.y;

   console.log( parts.pathname);
   console.log(x);
    if ( parts.pathname ==='/multiply'){
        console.log(arithmetic.multiply(x,y));

        res.end(''+arithmetic.multiply(x,y)); } 
    else if ( parts.pathname==='/add'){
        console.log(arithmetic.add(x,y));
        res.end(''+arithmetic.add(x,y)); 
    } 
    else if ( parts.pathname ==='/divide'){
        console.log(arithmetic.divide(x,y));
    
        res.end(''+arithmetic.divide(x,y)); } 
    else if ( parts.pathname ==='/subtract'){
        console.log(arithmetic.subtract(x,y));
        
        res.end(''+arithmetic.subtract(x,y)); } 
    else {res.statusCode =401
        res.end();}

});

server.listen(3000); 