FROM node:10

RUN mkdir -  /usr/src/frontend-swapi

WORKDIR /usr/src/frontend-swapi

COPY .  /usr/src/frontend-swapi

RUN npm install


RUN npm build

EXPOSE 8080

CMD ["npm", "start"]

