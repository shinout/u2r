module.exports = function(url) {
  if (typeof url != "string") {
    throw new Error("type of url must be string");
  }

  var op = require('url').parse(url);
  if (!op.hostname) {
    if (op.pathname.charAt(0) != '/') {
      var splits = op.pathname.split("/");
      op.hostname =splits.shift();
      op.pathname =splits.join();
    }
  }
  return ({
    host: op.hostname,
    port: op.port || (op.protocol == 'https:') ? 443 : 80,
    path: ( op.pathname 
            ?  ((op.pathname.slice(0,1) == "/") ? "" : "/") + op.pathname + (op.search || "") 
            : "/"),
    protocol: op.protocol ? op.protocol.slice(0, -1) : 'http'
  });
}

