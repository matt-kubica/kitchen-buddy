FROM node

# ARG uid=1000
# ARG user=username
# RUN set -x ; \
#   addgroup -g $uid -S $user ; \
#   adduser -u $uid -D -S -G $user $user \
#   && exit 0 ; exit 1
# RUN echo $user' ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

WORKDIR /usr/src/app

COPY package.json .

RUN npm config set unsafe-perm true
RUN npm install

COPY . .

EXPOSE 8000