FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN sudo chown -R 1000:1000 "/root/.npm"
RUN npm install

COPY . .

EXPOSE 8000