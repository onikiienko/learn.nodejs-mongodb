var bd = require('./bd')
var reading = require('./index');
var http = require("http");


http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    for(i in reading.result){response.write(''+reading.result[i]);}
    response.end();
}).listen(8888);

