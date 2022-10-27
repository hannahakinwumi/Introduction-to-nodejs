const http = require('http');


// create a server with the HTTP variable
const server = http.createServer('function',{req, res}(
    //Headers
    res.writeHead(200, {'content-Type,': 'text/plain'})

    // send back some information
    res.end("welcome to my page")
 

//create a port
server.listen(4000, '127.0.0.1');

console.log('Yes, you have created a server!');
