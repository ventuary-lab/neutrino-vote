FROM node:12-alpine

COPY package.json package-lock.json tsconfig-node.json /app/

WORKDIR /app

COPY src /app
COPY public /app

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]

