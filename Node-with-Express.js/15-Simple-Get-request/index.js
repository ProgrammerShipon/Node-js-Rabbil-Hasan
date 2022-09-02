
var express = require('express');

app = express();

app.get('/', function(req, res) {
   res.send('This is simple get request');
});




// Server Start
app.listen(8000, function () {
   console.log('Server Run Successs.. Port: 8000 ');
});