const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Create Document API',
      version: '1.0.0',
      description: 'API documentation for the Create Document microservice',
    },
    servers: [
      {
        url: 'http://localhost:3019', // Change this to your base URL
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
