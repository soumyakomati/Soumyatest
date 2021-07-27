const http = require('http') //get inbuilt library //common js modules
//import http from 'http';//es2015 es modules-not used anymore

const server = http.createServer((req,res) => {  
    //server is created, function will not be executed but saved to memory
    res.end('hello world');
});

server.listen(3000); 
//start the server on the port-- it is also asynchronous function, take time to startup
//use ctrl+C to stope node.js server otherwise it is pooling like looking for new task in queue
//dont create any larger functions - in terms of size and execution time
//