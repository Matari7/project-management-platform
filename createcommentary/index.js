const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

// Swagger configuration options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Especificación OpenAPI utilizada
    info: {
      title: 'Commentary Service API',
      version: '1.0.0',
      description: 'API to manage commentaries for projects',
    },
  },
  apis: ['index.js'], // Archivo(s) que contienen las anotaciones Swagger
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Commentary:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         projectId:
 *           type: string
 *         user_id:
 *           type: string
 *         content:
 *           type: string
 */

/**
 * @swagger
 * /commentaries:
 *   post:
 *     summary: Create a commentary
 *     description: Create a new commentary for a project.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commentary'
 *     responses:
 *       '201':
 *         description: Successfully created commentary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Commentary'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
app.post('/commentaries', async (req, res) => {
  const { projectId, user_id, content } = req.body;
  try {
    const commentary = await commentaryService.createCommentary(projectId, user_id, content);
    res.status(201).json(commentary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Server listening
const PORT = 3014;
app.listen(PORT, () => {
  console.log(`Create Commentary service running on port ${PORT}`);
});
