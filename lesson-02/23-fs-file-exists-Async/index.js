
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
   if (req.url = '/') {
      // Asynchro
      fs.exists('index.html', function(err) {
         if(err) {
            res.end('True');
         } else {
            res.end('False');
         }
      });
   };
});

server.listen(8080);
console.log('Server Run Success. port : 8080');

