var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var buffer=require('buffer').buffer;
var buffer = fs.readFileSync('index.html');
var display = buffer.toString("utf-8");
app.get('/', function(request, response) {
  response.send(display);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
