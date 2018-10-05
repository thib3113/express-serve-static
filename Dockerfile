FROM node:10.11-alpine

WORKDIR /app

RUN apk add --no-cache yarn


COPY ./package.json .
RUN yarn install

COPY ./runner.js .

ENTRYPOINT ["yarn", "start"]