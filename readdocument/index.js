const express = require('express');
const bodyParser = require('body-parser');
const DocumentService = require('./documentservice');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3020;

app.use(bodyParser.json());

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
