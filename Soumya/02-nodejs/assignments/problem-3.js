/*
Create a simple HTTP server that takes a URL as input, and generates a shorter URL (just
like a [URL shortening](https://en.wikipedia.org/wiki/URL_shortening) service like
[bit.ly](https://bit.ly) does).
Example
POST http://localhost:3000/shorten with request body
https://en.wikipedia.org/wiki/Design_rule_for_Camera_File_system should return a unique
short URL, says http://localhost:3000/z34DCs. The algorithm and format of exact URL
generated is upto you, but generated URL must be unique, and your algorithm MUST always
generate the same short URL for a particular URL (the "long" URL)

Finally, when you make a GET request for the short URL, the server must send a redirect
request - this is achieved with status code 304, and adding a Location header whose value is the
complete URL (the "long" URL). For more information on redirects check [this
page](https://en.wikipedia.org/wiki/URL_redirection).
*/
const http = require('http');
const url = require('url');
const shortUrl = require('node-url-shortener');
const server = http.createServer((req,res) => { 
    shortUrl.short(req, function(err, url){
    console.log(url.replace('https://cdpt.in/','http://localhost:3000/'));
    });

    if (req.url === '/short') {
        res.statusCode =307;
        res.setHeader('Location','/long');
    }
    res.end();
});

//     const parts = url.parse(req.url,true); 
//     console.log(parts);
//     console.log(parts.query);
// } );


// shortUrl.short('https://en.wikipedia.org/wiki/Design_rule_for_Camera_File_system', function(err, url){
//     console.log(url.replace('https://cdpt.in/','http://localhost:3000/'));
// });

server.listen(3000); 

