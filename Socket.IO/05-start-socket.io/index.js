const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);


app.get('/', function(req, res) {
   res.sendfile(__dirname+'/index.html')
})






expressServer.listen(1000, function () {
   console.log('Server Run @ 1000');
})



