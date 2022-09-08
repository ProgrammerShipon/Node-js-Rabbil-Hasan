console.clear();

const express = require('express');
const app = express();

const http = require('http');

const expressServer = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(expressServer);

io.on('connection', function (socket) {
   console.log('New User Connected');

   io.sockets.emit('MyBroadcast', 'Hello Everyone');

   socket.on('disconnect', function () {
      console.log('User Disconnect');
   })
})


app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
})

expressServer.listen(1300, function () {
   console.log('Server Run Success @ 1300');
})







