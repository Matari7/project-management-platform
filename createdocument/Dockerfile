# Dockerfile para createdocument
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4013

CMD ["npm", "start"]
