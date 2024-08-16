// swagger.js

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Create User API',
            version: '1.0.0',
            description: 'API documentation for the Create User service',
        },
        servers: [
            {
                url: 'http://localhost:4001',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The user ID',
                        },
                        name: {
                            type: 'string',
                            description: 'The user\'s name',
                        },
                        email: {
                            type: 'string',
                            description: 'The user\'s email',
                        },
                        password: {
                            type: 'string',
                            description: 'The user\'s password',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
