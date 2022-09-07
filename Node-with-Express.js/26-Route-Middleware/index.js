
const express = require('express');

const app = express();

app.get('/', function( req, res) {
  res.send('This is home page');
})

app.use('/contact', function (req, res, next) {
  console.log('I am about middleware . ');
  next();
})

app.get('/contact', function (req, res) {
  res.send('This is Contact Page');
})

app.get('/about', function (req, res) {
  res.send('This is About Page')
})

app.listen(1000, function () {
  console.log('Server Running..')
})
