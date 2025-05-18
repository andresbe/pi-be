FROM node:22

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]
