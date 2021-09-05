FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN npm config set unsafe-perm true
RUN npm install

COPY . .

EXPOSE 8000