FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn global add typescript
RUN yarn add dotenv
RUN yarn add express
RUN yarn add express-validator
RUN yarn add mongodb


EXPOSE 8000