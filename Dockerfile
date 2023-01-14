FROM node:16

COPY package*.json ./

WORKDIR /giornalino-front

RUN npm install

RUN npm run front-build

WORKDIR /giornalino-back

RUN npm install

EXPOSE 3031
RUN ["npm", "run", "back-start"]
