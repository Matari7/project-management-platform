const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Project Management Platform API',
      version: '1.0.0',
      description: 'API documentation for the Project Management Platform',
    },
    servers: [
      {
        url: 'http://localhost:3003', // Cambia esto a tu URL base
      },
    ],
  },
  apis: ['./index.js', './userservice.js', './usermodel.js'], // Especificar archivos específicos
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
