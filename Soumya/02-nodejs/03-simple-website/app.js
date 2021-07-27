const http = require('http');
const url = require('url');

//parseInt("1") or +"1" converst it
//NaN ==== NaN is false
//isNan(parseInt("abc")) returns check, efficient way to check for NaN

const server = http.createServer((req,res) => { 
   const parts = url.parse(req.url,true); 
   console.log(parts);
   console.log(parts.query);
   console.log(parts.pathName);

    if (req.url ==='/'){
        res.end('Home'); } 
    else if (req.url ==='/contact'){
        res.end('Contact'); } 
    else {res.statusCode =404
        res.end();}
});

server.listen(3000); 