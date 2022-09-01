
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
   if (req.url = '/') {
      // Asynchro
      fs.unlink('demoSync.txt', function(err) {
         if(err) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File Delete Fail . ');
            res.end();
         } else {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File Delete Success . ');
            res.end();
         };
      });
   };
});

server.listen(7070);
console.log('Server Run Success. port : 7070');

