const express = require('express');
const bodyParser = require('body-parser');
const documentService = require('./documentservice');
const { swaggerUi, swaggerSpec } = require('./swagger');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3019, () => {
  console.log('Create Document service running on port 3019');
});

/**
 * @swagger
 * /documents:
 *   post:
 *     summary: Create a new document
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Project Proposal
 *               path:
 *                 type: string
 *                 example: /documents/proposal.pdf
 *               projectId:
 *                 type: string
 *                 example: 1
 *     responses:
 *       201:
 *         description: Document created successfully
 *       500:
 *         description: Internal server error
 */
app.post('/documents', async (req, res) => {
  const { name, path, projectId } = req.body;
  try {
    const document = await documentService.createDocument(name, path, projectId);
    res.status(201).json(document);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
