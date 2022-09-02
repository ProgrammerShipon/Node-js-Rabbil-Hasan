var express = require('express');
app = express();

/**
 *  res.send() // response Body ke nidesh kore
 * res.end()   // response ending point
 */

// Redirect
app.get("/headers", function(req, res) {
   res.append('Name' , 'Shipon Hossen Raju');
   res.append('City' , 'Dhaka');
   res.append('Age' , '19 Years');

   res.status(201).end('Hello World');
});



// Server Start
app.listen(4000, function () {
   console.log('Server Run Successs.. Port: 4000 ');
});