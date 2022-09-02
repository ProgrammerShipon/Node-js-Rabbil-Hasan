var express = require('express');
app = express();

/**
 *  res.send() // response Body ke nidesh kore
 * res.end()   // response ending point
 */

// Redirect
app.get("/bangladesh", function(req, res) {
   res.redirect('http://localhost:4000/india');
});

app.get("/india", function(req, res) {
   res.send('This is india');
});


// Server Start
app.listen(4000, function () {
   console.log('Server Run Successs.. Port: 4000 ');
});