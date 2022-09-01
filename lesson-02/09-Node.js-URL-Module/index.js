/**
 * Built-in URL Module 
 *   The URL module splits up a web address into readable parts. 
 * 
 *  http://rabbil.com/blog.html?year=2020&month=july;
 */

const { write } = require('fs');
var http = require('http');
const { endianness } = require('os');
var url = require('url');

var server = http.createServer(function(req, res) {

   var myUrl = 'http://rabbil.com/blog.html?year=2020&month=july';

   var myUrlObj = url.parse(myUrl, true);

   var myHostName = myUrlObj.host;
   var myPathName = myUrlObj.pathname;
   var mySearchName = myUrlObj.search;

   res.writeHead(200, {'Content-Type':'text/html'});
   res.write('Main Url : ' + myUrl);
   res.write('<br/> Host Name : ' + myHostName);
   res.write('<br/> Path Name : ' + myPathName);
   res.write('<br/> Search Name : ' + mySearchName);
   res.end();

});

server.listen(5050);
console.log('Server Run Success , port : 5050');