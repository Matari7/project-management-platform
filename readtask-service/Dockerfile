# Dockerfile para readtask-service
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4025

CMD ["npm", "start"]
