FROM node:10.6-alpine

WORKDIR /www/backend

ADD package.json /www/backend
RUN npm install

ADD . /www/backend

EXPOSE 3000

CMD [ "npm", "start" ]