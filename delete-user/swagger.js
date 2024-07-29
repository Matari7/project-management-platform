const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delete User API',
      version: '1.0.0',
      description: 'API documentation for the Delete User microservice',
    },
    servers: [
      {
        url: 'http://localhost:3004', // Cambia esto a tu URL base
      },
    ],
  },
  apis: ['./index.js'], // Especificar archivos específicos
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
