/* 
Explore the chalk module on npmjs.com - install it and use it.
You will build a simple API server that serves a list of workshops, and allows you to add a
workshop.
Use the provided workshops.json file for this exercise. This has a JSON array of sample
workshops. You can use this as the initial set of data when the server starts up. Every workshop
has a unique id and more details.
Create a simple HTTP server that serves the following
1. GET /workshops
This returns a JSON array of all workshops.
A note on how to do this
Read from workshops.json and serve it.
2. POST /workshops
This adds a new workshop object using the JSON data sent in HTTP request
A note on how to do this
Use the request object’s (of type IncomingMessage) ‘data’ and ‘end’ to read the request body.
Use JSON.parse() to convert it to a JS object (check reference provided below). Check if all
expected properties of a workshop have been passed in the body, else respond with an
appropriate error message, status code and Content-Type header set to ‘application/json’
(check reference on ServerResponse object’s writeHead() provided below). Generate a
unique id for every product (use any custom logic you deem fit, but id has to be unique), and
adds it to the workshop object as the id property. Update the workshops.json file on the disk
(overwrite with updated array of workshops). It is recommended you also maintain an inmemory copy of the workshops.json file as well for responding faster to user request
(although in cases like power failure during a write to file this can lead to data loss issue).
Reference for using ‘data’ and ‘end’ events to read request body
https://www.tutorialspoint.com/parsing-request-body-in-node
Reference for setting response status code, status message and HTTP headers
https://nodejs.org/dist/latestv14.x/docs/api/http.html#http_response_writehead_statuscode_statusmessage_headers
Create some helper functions to solve small pieces of this exercise. Make sure to set up unit
testing using Jest (or any other library of your choice), and test these helper functions
*/

const chalk = require('chalk');


console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'))