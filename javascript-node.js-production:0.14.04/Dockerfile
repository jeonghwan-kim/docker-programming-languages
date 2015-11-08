# Start with docker's base ubuntu image
FROM ubuntu:14.04

# Update package sources
RUN apt-get -y update

# Install nodejs
WORKDIR /opt
RUN apt-get install -y wget
RUN wget -O /opt/nodejs.tar.gz http://nodejs.org/dist/v0.10.29/node-v0.10.29-linux-x64.tar.gz
RUN tar xvf nodejs.tar.gz
RUN mv /opt/node-v0.10.29-linux-x64 /opt/nodejs

# Create symbolic link
RUN bash -c "ln -s /opt/nodejs/bin/{node,npm} /usr/local/bin/"

# Set default WORKDIR
WORKDIR /source

# forever for running node apps as daemons and automatically restarting on file changes
RUN npm install forever -g

# Copy source
COPY . /source

# ENV
ENV NODE_ENV production

# Install dependencies
RUN npm install --production

# PORT
EXPOSE 9000

# Run server
CMD ["forever", "hello.js"]
