
var express = require('express');
app = express();
app.post('/', function(req, res) {

   res.send(`This is Simple Post Request...`);

});


// Server Start
app.listen(1010, function () {
   console.log('Server Run Successs.. Port: 1010 ');
});
