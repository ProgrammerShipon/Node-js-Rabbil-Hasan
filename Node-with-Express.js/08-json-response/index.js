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
app.get("/jsons", function(req, res) {

   let MyJSONArray = [
      {
         name: 'Shipon',
         city: 'Pabna',
         occupation: 'Engr.'
      },
      {
         name: 'Hossen',
         city: 'Rajshahi',
         occupation: 'Computer.'
      },
      {
         name: 'Raju',
         city: 'Rajbari',
         occupation: 'Student.'
      }
   ]

   res.json(MyJSONArray);
});


// Server Start
app.listen(4000, function () {
   console.log('Server Run Successs.. Port: 4000 ');
});