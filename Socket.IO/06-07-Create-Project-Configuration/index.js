
const express = require('express');
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const oi = new Server(expressServer);


oi.on('connection', function(socket) {
   console.log('New User Connected');

   socket.on('disconnect', function() {
      console.log('User Dsconnected');
   })
})



app.get('/', function (req, res) {
   res.sendFile(__dirname+'/index.html')
})


expressServer.listen(4000, function () {
   console.log('Server Run @ 4000')
})

