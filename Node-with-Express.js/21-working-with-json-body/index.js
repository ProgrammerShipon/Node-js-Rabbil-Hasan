  
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

/*
{
	"name" : "Shipon Hossen Raju",
	"city": "pabna",
	"age" : "19"
} 
app.post('/', function (req , res) {
   let JSONData = req.body;
   let JSONString = JSON.stringify(JSONData);
   res.send(JSONString);
})
*/

app.post('/', function(req, res) {
   const JSONData = req.body;
   const name = JSONData['name'];
   const city = JSONData['city'];
   const age = JSONData['age'];
   res.send(`Name : ${name} , City : ${city} age : ${age}`)
})

// Server Start
app.listen(1010, function () {
   console.log('Server Run Successs.. Port: 1010 ');
});

