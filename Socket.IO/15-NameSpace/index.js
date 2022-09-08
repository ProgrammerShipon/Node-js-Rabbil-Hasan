console.clear();


const express = require('express');
const app = express();

const http = require('http');

const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server (expressServer);

const buyNsp = io.of('/buy');
buyNsp.on('connection', function (socket) {
   console.log('New User Connected');

   buyNsp.emit('MyNsp', 'Hello Buy Namespace...');

   socket.on('disconnect', function () {
      console.log('User Disconnected')
   })
})

const sellNsp = io.of('/sell');
sellNsp.on('connection', function (socket) {
   console.log('New User Connected');

   sellNsp.emit('MyNsp', 'Hello Sell Namespace...');

   socket.on('disconnect', function () {
      console.log('User Disconnected');
   })
})

app.get('/' , function (req, res) {
   res.sendFile(__dirname + '/index.html');
})






expressServer.listen(1400, function () {
   console.log('Server Run Success @ 1400');
})

















