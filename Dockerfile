FROM node:10.15.3-alpine

WORKDIR /code

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV BLUEBIRD_DEBUG=0

COPY package-lock.json package.json /code/

# RUN npm install --production
RUN npm install

EXPOSE 3000

COPY . /code

USER $USERNAME

# RUN APP DIRECTLY TO AVOID SPAWNING SUBPROCESSES IN DOCKER
CMD [ "node", "index.js" ]
