  
var express = require('express');
app = express();

//  http://localhost:1010?firstName=Shipon&lastName=Raju
app.post('/', function(req, res) {
   const userName = req.header('userName');
   const password = req.header('password');
   res.send(`User Name : ${userName} , Password : ${password}`);
});

// Server Start
app.listen(1010, function () {
   console.log('Server Run Successs.. Port: 1010 ');
});
