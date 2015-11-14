require('http').createServer(function (req, res) {
  res.end('hello world!');
}).listen(3000, function () {
  console.log('hello server is created. Visit localhost:3000');
});
