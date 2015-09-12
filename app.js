var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Yass');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', "localhost", port);

});
