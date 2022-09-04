  
var express = require('express');
app = express();

//  http://localhost:1010?firstName=Shipon&lastName=Raju
app.post('/', function(req, res) {
   const firstName = req.query.firstName;
   const lastName = req.query.lastName;
   res.send(`First Name : ${firstName} , Last Name : ${lastName}`);
});

// Server Start
app.listen(1010, function () {
   console.log('Server Run Successs.. Port: 1010 ');
});
