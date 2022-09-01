
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
   if (req.url = '/') {
      // Asynchro
      let checkFile = fs.existsSync('abc.html');
      if(checkFile) {
         res.end('True');
      } else {
         res.end('False');
      }
   };
});

server.listen(7080);
console.log('Server Run Success. port : 7080');

