FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4024

CMD ["npx", "ts-node-dev", "src/app.ts"]
