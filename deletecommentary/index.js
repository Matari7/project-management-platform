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
      title: 'Delete Commentary API',
      version: '1.0.0',
      description: 'API documentation for Delete Comentary service',
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /commentaries/{id}:
 *   delete:
 *     summary: Delete a commentary by ID
 *     description: Delete a commentary by its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the commentary to delete
 *     responses:
 *       '200':
 *         description: Successfully deleted commentary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Commentary deleted successfully
 *       '404':
 *         description: Commentary not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Commentary not found
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
app.delete('/commentaries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const success = await commentaryService.deleteCommentary(id);
    if (success) {
      res.status(200).json({ message: 'Commentary deleted successfully' });
    } else {
      res.status(404).json({ message: 'Commentary not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3017, () => {
  console.log('Delete Commentary service running on port 3017');
});
