var express = require('express');
app = express();

/**
 *  res.send() // response Body ke nidesh kore
 * res.end()   // response ending point
 */

// Routing end method

// Response Status Code
app.get("/status210", function(req, res) {
   res.status(210).end('210 . Created ...');
});

// JSON Response
app.get("/downloads", function(req, res) {

   res.download('./downloads/abc.jpg');

});


// Server Start
app.listen(4000, function () {
   console.log('Server Run Successs.. Port: 4000 ');
});