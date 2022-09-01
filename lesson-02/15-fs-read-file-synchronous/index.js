
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
   if (req.url = '/') {
      // synchro
      let mydata = fs.readFileSync('index.html');
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(mydata);
      res.end();
   };
});

server.listen(6060);
console.log('Server Run Success. port : 6060');

