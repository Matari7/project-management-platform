const express = require('express');
const bodyParser = require('body-parser');
const DocumentService = require('./documentservice');
const { swaggerUi, swaggerSpec } = require('./swagger');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3022;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.delete('/documents/:id', async (req, res) => {
  const documentId = parseInt(req.params.id, 10);

  if (isNaN(documentId)) {
    return res.status(400).json({ error: 'Invalid document ID' });
  }

  try {
    const success = await DocumentService.deleteDocument(documentId);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Delete Document service running on port ${port}`);
});

/**
 * @swagger
 * /documents/{id}:
 *   delete:
 *     summary: Delete a document by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the document to delete
 *     responses:
 *       204:
 *         description: Document deleted successfully
 *       400:
 *         description: Invalid document ID
 *       404:
 *         description: Document not found
 *       500:
 *         description: Internal server error
 */
