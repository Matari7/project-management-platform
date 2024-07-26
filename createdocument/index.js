const express = require('express');
const bodyParser = require('body-parser');
const documentService = require('./documentservice');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

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

app.listen(3019, () => {
  console.log('Create Document service running on port 3019');
});
