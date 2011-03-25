[node.js] make an option object for "http(s).request" from url.
===

To use

    var u2req = require('/path/to/url2request');
    var option = u2req('http://nodejs.org/');
    var req = require('http').request(option, function(res) {
      res.on('data', function(d) {
        // do something
        process.stdout.write(d);
      });
    });
    req.end();
