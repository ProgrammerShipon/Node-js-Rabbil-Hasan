
var fs = require('fs');
var http = require('http');

var htmlFiletext = `<!DOCTYPE html>
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



var server = http.createServer(function(req, res) {
   if (req.url == '/') {
      // Asy
      var fsReadfile = './demo.html';
      fs.writeFile(fsReadfile, htmlFiletext, function(error) {
         if(error) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Write fail');
            res.end();
         } else {
            // sir dekhaiche
            // res.writeHead(200,{'Content-Type':'text/html'});
            // res.write('File write Success...');
            // res.end();
            
            // Nije try korchi
            fs.readFile(fsReadfile, function(error, data){
               res.writeHead(300, {'Content-Type':'text/html'});
               res.write(data);
               res.end();
            })
         }
      });
   }
});

server.listen(6060);
console.log('Server Run Success. port : 6060');

