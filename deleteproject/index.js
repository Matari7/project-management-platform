const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const projectService = require('./projectService');

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Delete Project API',
      version: '1.0.0',
      description: 'API documentation for Delete Project service',
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *       404:
 *         description: Project not found
 *       500:
 *         description: Internal server error
 */
app.delete('/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await projectService.deleteProject(id);
    if (deleted) {
      res.status(200).json({ message: 'Project deleted' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3008, () => {
  console.log('Delete Project service running on port 3008');
});
