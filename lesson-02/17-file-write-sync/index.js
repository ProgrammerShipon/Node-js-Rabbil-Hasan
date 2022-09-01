
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
   if (req.url = '/') {
      // synchro
      var writeText = `<!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title> Demo html </title>
      </head>
      <body>
         <h1> This is home page </h1>
         <button onclick="alertMe()"> Click Me </button>
         <script>
            function alertMe() {
               alert('Hello');
            }
         </script>
      </body>
      </html>`;
      var textFile = 'demoSync.html';
      let error = fs.writeFileSync(textFile, writeText);
      if(error) {
         res.writeHead(200, {'Content-Type':'text/html'});
         res.write('File Write Fail');
         res.end();
      } else {
         // video te dekhano
         // res.writeHead(200, {'Content-Type':'text/html'});
         // res.write('File Write Success');
         // res.end();

         // nijer cestay
         let readfile = fs.readFileSync(textFile);
         res.writeHead(200, {'Content-Type':'text/html'});
         res.write(readfile);
         res.end();
      };
   };
});

server.listen(7060);
console.log('Server Run Success. port : 7060');

