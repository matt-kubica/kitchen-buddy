FROM node:16

# app directory
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm install

# bundle app source
COPY . .

# exports
EXPOSE 8000