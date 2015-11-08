var http = require('http');

http.createServer(function (req, res) {
  res.end('hello world!');
}).listen(9000, function () {
  console.log('hello server is created. Visit localhost:9000');
});
