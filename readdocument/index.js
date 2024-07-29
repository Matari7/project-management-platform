const express = require('express');
const bodyParser = require('body-parser');
const DocumentService = require('./documentservice');
const { swaggerUi, swaggerSpec } = require('./swagger');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3020;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/documents/:id', async (req, res) => {
  const documentId = parseInt(req.params.id, 10);
  if (isNaN(documentId)) {
    return res.status(400).json({ error: 'Invalid document ID' });
  }

  try {
    const document = await DocumentService.getDocument(documentId);
    if (document) {
      res.json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Read Document service running on port ${port}`);
});

/**
 * @swagger
 * /documents/{id}:
 *   get:
 *     summary: Retrieve a document by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the document to retrieve
 *     responses:
 *       200:
 *         description: Document retrieved successfully
 *       400:
 *         description: Invalid document ID
 *       404:
 *         description: Document not found
 *       500:
 *         description: Internal server error
 */
