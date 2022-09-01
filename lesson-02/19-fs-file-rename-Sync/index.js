
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
   if (req.url = '/') {
      // Asynchro
      var result =  fs.renameSync('demoSyncNew.html','demoSync.html');
      if(result) {
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('File Rename Fail . ');
         res.end();
      } else {
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('File Rename Success . ');
         res.end();
      };
   };
});

server.listen(7070);
console.log('Server Run Success. port : 7070');

