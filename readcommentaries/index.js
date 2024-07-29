const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Read Commentaries API',
      version: '1.0.0',
      description: 'API documentation for Read Commentaries service',
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /commentaries/{projectId}:
 *   get:
 *     summary: Get commentaries by project ID
 *     description: Retrieve commentaries associated with a specific project based on project ID.
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project to fetch commentaries for
 *     responses:
 *       '200':
 *         description: Successful retrieval of commentaries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   text:
 *                     type: string
 *                   author:
 *                     type: string
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
app.get('/commentaries/:projectId', async (req, res) => {
  const { projectId } = req.params;
  try {
    const commentaries = await commentaryService.readCommentaries(projectId);
    res.status(200).json(commentaries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3015, () => {
  console.log('Read Commentaries service running on port 3015');
});
