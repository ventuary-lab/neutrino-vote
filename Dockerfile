FROM node:12-alpine

COPY package.json package-lock.json /app/

WORKDIR /app

COPY src /app/src
COPY public /app/public

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "run", "serve" ]
