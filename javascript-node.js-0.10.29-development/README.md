# javascript-node.js-10.29-development

Node.js platform for development environment

## Build Image

You can manually build image by below commands.

```
$ git clone jeonghwan/docker-programming-languages
$ cd docker-programming-languages/javascript-node.js-0.10.29-development
$ docker build -t jeonghwan/javascript-node.js:0.10.29-development .
```

It take so long to complete install process. You can also pull image from docker hub.

```
$ docker pull jeonghwan/javascript-node.js:0.10.29-development
```

## How to develop

```
$ docker run --rm -i -t -v $(pwd):/source -p 3000:3000 jeonghwan/javascript-node.js:0.10.29-development /bin/bash
$ node hello_word
hello server is created. Visit localhost:3000
```

