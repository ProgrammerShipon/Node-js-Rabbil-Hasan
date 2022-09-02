
var express = require('express');

app = express();

app.get('/', function(req, res) {

   let firstName = req.query.firstName;
   let lastName = req.query.lastName;

   res.end(`First Name : ${firstName} , Last Name : ${lastName}`);
});




// Server Start
app.listen(8080, function () {
   console.log('Server Run Successs.. Port: 8080 ');
});