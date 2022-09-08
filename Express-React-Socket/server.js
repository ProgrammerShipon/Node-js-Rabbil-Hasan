
const express = require('express');
// Express Instense
const app = express();

// HTTP method call
const http = require('http');
const expServer = http.createServer(app);

// Socket.io Server Create
const { Server } = require('socket.io');
const io = new Server(expServer);

// Path Location Mange
const path = require('path');

app.use(express.static('client/build'))

// User Connected
io.on('connection', function (socket) {
   console.log('New User Connected');

   // Send User message
   setTimeout ( function () {
      socket.emit('msg', 'This is message from server')
   }, 5000)

   socket.on('disconnect', function () {
      console.log('User Disconnected')
   })
})

// Server Reqest All ( * )
app.get('*', function (req, res) {
   
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})


// Server Reqest
app.get('/express-server', function (req, res) {
   res.end('This is my backend');
})


// Server Start
expServer.listen(5000, function () {
   console.log('Sever Run Success @ 5000');
})
