FROM node:10.15.3-alpine
RUN mkdir /code && chown node:node /code
WORKDIR /code

USER node
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV BLUEBIRD_DEBUG=0
EXPOSE 3000

COPY package-lock.json package.json /code/

RUN npm ci

COPY . /code


# RUN APP DIRECTLY TO AVOID SPAWNING SUBPROCESSES IN DOCKER
CMD [ "node", "index.js" ]
