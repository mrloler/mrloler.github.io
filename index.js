var http = require('http');
var fs = require('fs');  

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, data) {
    res.write(data);
    return res.end();
  });
}).listen(8080); //the server object listens on port 8080 