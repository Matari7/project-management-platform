const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delete Document API',
      version: '1.0.0',
      description: 'API documentation for the Delete Document microservice',
    },
    servers: [
      {
        url: 'http://localhost:3022', // Change this to your base URL
      },
    ],
  },
  apis: ['./index.js'], // Specify the specific files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
