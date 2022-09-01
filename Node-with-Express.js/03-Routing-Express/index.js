var express = require('express');

app = express();

// Routing 
app.get('/', function(req, res) {
   res.send('Hello Express js');
});

app.get("/home", function(req, res) {
   res.send('Wellcome to Home Page.. ');
});

app.get("/contact", function(req, res) {
   res.send('Wellcome to Contact Page.. ');
});

app.get("/service", function(req, res) {
   res.send('Wellcome to Service Page..');
});

// Methods
app.put('/', function(req, res) {
   res.send('Wellcome to Express.js Put Method');
});

app.post("/", function(req, res) {
   res.send('Wellcome to Home Page.. Post Method ');
});

app.delete("/", function(req, res) {
   res.send('Wellcome to Contact Page.. Delete Method ');
});





// Server Start
app.listen(8800, function () {
   console.log('Server Run Successs.. Port: 8800 ');
});