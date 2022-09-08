
// Get http 
const http =  require('http');

// Get Express Js
const express = require('express');

// Express
const app = express();

// Express Server
const expServer = http.createServer(app);

// Socket Server 
const { Server } = require('socket.io');

// Socket 
const io = new Server(expServer);

// Socket Connection
io.on('connection', function (socket) {
   console.log('New User Connected');

   // Event fire Rooms
   socket.join('kitchen-room');
   const sizeOfKitchen = io.sockets.adapter.rooms.get('kitchen-room').size;
   io.sockets.in('kitchen-room').emit('boiling', 'Boiling Water = ' + sizeOfKitchen);
   io.sockets.in('kitchen-room').emit('cookings', 'Fried Rice = ' + sizeOfKitchen);

   socket.join('bed-room');
   const sizeOfBedRoom = io.sockets.adapter.rooms.get('bed-room').size;
   io.sockets.in('bed-room').emit('sleep', 'I am sleeping = ' + sizeOfBedRoom);
   io.sockets.in('bed-room').emit('rest', 'I am taking rest = ' + sizeOfBedRoom);
   // Disconnect User
   socket.on('disconnect', function () {
      console.log('User Disconnected');
   })
})

// File Routs
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
})

// Server Start
expServer.listen(1212, function () {
   console.log('Server Run Seccess @ 1212');
})