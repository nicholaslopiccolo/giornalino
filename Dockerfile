FROM node:16

WORKDIR /app
COPY package*.json .

RUN npm run front-build

EXPOSE 3031
RUN ["npm", "run", "back-start"]
