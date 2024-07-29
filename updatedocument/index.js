const express = require('express');
const bodyParser = require('body-parser');
const DocumentService = require('./documentservice');
const { swaggerUi, swaggerSpec } = require('./swagger');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3021;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.put('/documents/:id', async (req, res) => {
  const documentId = parseInt(req.params.id, 10);
  const { name, path, project_id } = req.body;

  if (isNaN(documentId)) {
    return res.status(400).json({ error: 'Invalid document ID' });
  }

  try {
    const updatedDocument = await DocumentService.updateDocument(documentId, { name, path, project_id });
    if (updatedDocument) {
      res.json(updatedDocument);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Update Document service running on port ${port}`);
});

/**
 * @swagger
 * /documents/{id}:
 *   put:
 *     summary: Update an existing document
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the document to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Project Proposal
 *               path:
 *                 type: string
 *                 example: /documents/updated_proposal.pdf
 *               project_id:
 *                 type: string
 *                 example: 1
 *     responses:
 *       200:
 *         description: Document updated successfully
 *       400:
 *         description: Invalid document ID
 *       404:
 *         description: Document not found
 *       500:
 *         description: Internal server error
 */
