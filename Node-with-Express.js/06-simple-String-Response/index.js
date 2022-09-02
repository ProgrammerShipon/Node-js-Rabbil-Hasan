var express = require('express');
app = express();

// Routing 
// app.get("/gets", function(req, res) {
//    res.send('This is simple String response.. Get Methods');
// });
// app.post("/posts", function(req, res) {
//    res.send('This is simple String response.. Post Methods ');
// });

/**
 *  res.send() // response Body ke nidesh kore
 * res.end()   // response ending point
 */

// Routing end method
app.get("/gets", function(req, res) {
   res.end('This is simple String response.. Get Methods, End');
});
app.post("/posts", function(req, res) {
   res.end('This is simple String response.. Post Methods, End');
});

// Server Start
app.listen(4000, function () {
   console.log('Server Run Successs.. Port: 4000 ');
});