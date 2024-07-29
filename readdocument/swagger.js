const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Read Document API',
      version: '1.0.0',
      description: 'API documentation for the Read Document microservice',
    },
    servers: [
      {
        url: 'http://localhost:3020', // Change this to your base URL
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
