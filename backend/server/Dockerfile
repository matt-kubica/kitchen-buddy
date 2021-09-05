# FROM node:16

# # permissions
# ARG uid=1000
# ARG user=node
# RUN set -x ; \
#   addgroup -g $uid -S $user ; \
#   adduser -u $uid -D -S -G $user $user \
#   && exit 0 ; exit 1
# RUN echo $user' ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# # app directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # bundle app source
# COPY --chown $user:$user . .

# # install dependencies
# RUN npm install

# # set user
# USER $user

# # exports
# EXPOSE 8000


WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

EXPOSE 8000