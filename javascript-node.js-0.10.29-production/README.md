# javascript-node.js-10.29-development

Node.js platform for production environment with forever

## Build Image

You can manually build image by below commands.

```
$ git clone jeonghwan/docker-programming-languages
$ cd docker-programming-languages/javascript-node.js-0.10.29-production
$ docker build -t jeonghwan/javascript-node.js:0.10.29-production .
```

It take so long to complete install process. You can also pull image from docker hub.

```
$ docker pull jeonghwan/javascript-node.js:0.10.29-production
```

## How to run

```
$ docker run -d -p 3000:3000 --name node jeonghwan/javascript-node.js:0.10.29-production
$ docker logs -f node
hello server is created. Visit localhost:3000
```
