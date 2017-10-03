var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;
var app = express();

mongoose.connect('mongodb://localhost/luciron')
  .then(() =>  console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.use('/', function(req, res){
res.send("Hello World. Brought to you by: Port "+ port);
});

app.listen(port, function(){
console.log('Magic happens at '+port);
});