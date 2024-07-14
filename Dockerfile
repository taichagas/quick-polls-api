FROM node:20-slim

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "run", "dev"]