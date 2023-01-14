FROM node:16

COPY package*.json ./

WORKDIR /giornalino-front

RUN npm run front-build

WORKDIR /giornalino-back

EXPOSE 3031
RUN ["npm", "run", "back-start"]
