FROM node:alpine

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install dependencies
RUN npm ci

# tell the port number the container should expose
EXPOSE 3000

# run the command
CMD ["npm", "start"]
