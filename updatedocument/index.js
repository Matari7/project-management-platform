const express = require('express');
const bodyParser = require('body-parser');
const DocumentService = require('./documentservice');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3021;

app.use(bodyParser.json());

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
