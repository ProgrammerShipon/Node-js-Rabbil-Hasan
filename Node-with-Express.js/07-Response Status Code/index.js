var express = require('express');
app = express();

/**
 *  res.send() // response Body ke nidesh kore
 * res.end()   // response ending point
 */

// Routing end method
app.get("/status401", function(req, res) {
   res.status(401).end('401 . Unauthoried...');
});

app.get("/status402", function(req, res) {
   res.status(402).end('402 . Payment Required...');
});


app.get("/status403", function(req, res) {
   res.status(403).end('403 . Forbidden...');
});


app.get("/status404", function(req, res) {
   res.status(404).end('404 . Not Found...');
});

app.get("/status405", function(req, res) {
   res.status(405).end('405 . Method Not Allowed...');
});

app.get("/status406", function(req, res) {
   res.status(406).end('406 . Not Acceptable...');
});

app.get("/status201", function(req, res) {
   res.status(201).end('201 . Created ...');
});

app.get("/status202", function(req, res) {
   res.status(202).end('202 . Accepted ...');
});

app.get("/status203", function(req, res) {
   res.status(203).end('203 . Non-Authoritative Information...');
});

app.get("/status204", function(req, res) {
   res.status(204).end('204 . No Content ...');
});

app.get("/status205", function(req, res) {
   res.status(205).end('205 . Reset Content ...');
});

app.get("/status206", function(req, res) {
   res.status(206).end('206 . Partial Content ...');
});

app.get("/status207", function(req, res) {
   res.status(207).end('207 . Multi-Status ...');
});

app.get("/status208", function(req, res) {
   res.status(208).end('208 . Already Reported ...');
});

app.get("/status209", function(req, res) {
   res.status(209).end('209 . Created ...');
});

app.get("/status210", function(req, res) {
   res.status(210).end('210 . Created ...');
});



// Server Start
app.listen(4000, function () {
   console.log('Server Run Successs.. Port: 4000 ');
});