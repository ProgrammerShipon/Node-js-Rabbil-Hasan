var express = require('express');
app = express();


/**
 *  res.send() // response Body ke nidesh kore
 *  res.end()   // response ending point
 */

// Redirect
app.get("/cooki", function(req, res) {
   res.cookie('name' , 'Shipon Hossen Raju');
   res.cookie('city' , 'Dhaka');
   res.cookie('age' , '19 Years');
   res.end('cookie seccess...');
});



// Server Start
app.listen(5000, function () {
   console.log('Server Run Successs.. Port: 5000 ');
});

