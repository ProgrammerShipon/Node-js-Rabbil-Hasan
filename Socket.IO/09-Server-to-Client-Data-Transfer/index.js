// get http 
const http = require('http');

// Express Library and Configu
const express = require('express');
const app = express();

// Create Express Server
const expressServer = http.createServer(app);

// Get Socket.io Server
const { Server } = require('socket.io');
const oi = new Server(expressServer);

// Send Data to Client
oi.on ('connection', function (socket) {
   console.log('New User Connected');

   // After 5s Dat transfer
   setTimeout (function () {
      socket.send('Learn With Rabbil Hasan (Server --> Client) ')
   }, 5000) 

   // User Disconnected
   socket.on('disconnect', function () {
      console.log('User Disconnected');
   })
})

// Send File
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
})



// Server Run 
expressServer.listen(1010, function () {
   console.log('Server Running @ port : 1010');
})



