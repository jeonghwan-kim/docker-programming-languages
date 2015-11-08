# javascript-node.js-10.04

Node.js platform with forever

## Build Image

You can manually build image by below commands.

```
$ git clone jeonghwan/docker-programming-languages
$ cd docker-programming-languages/javascript-node.js-production:0.14.04
$ docker build -t javascript-node.js-production:0.14.04 .
```

It take so long to complete install process. You can also pull image from docker hub.

```
$ docker pull jeonghwan/javascript-node.js-production:0.14.04
```

## Run Hello, World

```
$ touch hello.js
$ npm init
$ vi hello.js
```

hello.js:

```
var http = require('http');

http.createServer(function (req, res) {
  res.end('hello world!');
}).listen(9000, function () {
  console.log('hello server is created. Visit localhost:9000');
});
```

```
$ docker run -d -p 9000:9000 --name node jeonghwan/javascript-node.js-production:0.14.04
$ docker logs -f node
hello server is created. Visit localhost:9000
```
