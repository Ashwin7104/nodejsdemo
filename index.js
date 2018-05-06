var http = require('http');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
    console.log('Hello World')
  

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
