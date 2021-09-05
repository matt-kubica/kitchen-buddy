FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN yarn global add typescript
RUN yarn

COPY . .

EXPOSE 8000