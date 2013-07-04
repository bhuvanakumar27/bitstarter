var express = require('express');
var fs = require('fs');


var contents = fs.readFile( 'index.html');
console.log('Contents of index.html:' + contents);


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
