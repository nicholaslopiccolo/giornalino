FROM node:14

COPY package*.json ./

COPY giornalino-front giornalino-front
COPY giornalino-back giornalino-back

RUN cd giornalino-front && npm install && npm run build

RUN cd ../giornalino-back && npm install

EXPOSE 3031
CMD ["npm", "run", "back-start"]
