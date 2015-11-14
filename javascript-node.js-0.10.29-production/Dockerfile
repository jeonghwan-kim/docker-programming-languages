FROM nacyot/javascript-node.js:0.10.29
MAINTAINER Jeonghwan Kim <ej88ej@gmail.com>

# forever for running node apps as daemons and automatically restarting on file changes
RUN npm install forever -g

# Copy source
COPY . /source

# ENV
ENV NODE_ENV production

# Install dependencies
RUN npm install --production

# Run server
CMD ["forever", "hello_world.js"]
