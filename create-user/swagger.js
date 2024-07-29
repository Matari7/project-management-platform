const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Create User API',
      version: '1.0.0',
      description: 'API documentation for the Create User microservice',
    },
    servers: [
      {
        url: 'http://localhost:3001', // Cambia esto a tu URL base
      },
    ],
  },
  apis: ['./*.js'], // Asegúrate de apuntar solo a archivos JavaScript
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
