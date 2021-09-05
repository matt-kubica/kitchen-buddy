FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN npm config set unsafe-perm true
RUN npm install
RUN npm install -g typescript

COPY . .

EXPOSE 8000