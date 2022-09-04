
var express = require('express');
app = express();
app.get('/', function(req, res) {

   const firstName = req.header('firstName');
   const lastName = req.header('lastName');
   const date  = req.header('keep-alive');

   res.end(`First Name : ${firstName} , Last Name : ${lastName}`);
});




// Server Start
app.listen(1010, function () {
   console.log('Server Run Successs.. Port: 1010 ');
});