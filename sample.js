var u2req = require("./url2request");

var op = u2req("http://nodejs.org/");

var http = require(op.protocol == 'https' ? 'https' : 'http');
op.method = 'GET';

var req = http.request(op, function(res) {
  res.on('data', function(d) {
    process.stdout.write(d);
  });

});
req.end();

