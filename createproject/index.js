const express = require('express');
const bodyParser = require('body-parser');
const projectService = require('./projectService');

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Create Project API',
      version: '1.0.0',
      description: 'API documentation for Create Project service',
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     description: Endpoint to create a new project.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *               user_id:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully created project
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 start_date:
 *                   type: string
 *                   format: date
 *                 end_date:
 *                   type: string
 *                   format: date
 *                 status:
 *                   type: string
 *                 user_id:
 *                   type: string
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
app.post('/projects', async (req, res) => {
  const { name, description, start_date, end_date, status, user_id } = req.body;
  try {
    const project = await projectService.createProject(name, description, start_date, end_date, status, user_id);
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3018, () => {
  console.log('Create Project service running on port 3018');
});
