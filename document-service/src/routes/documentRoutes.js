const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { title, createdBy } = req.body;
    const content = req.file.path;
    const document = await Document.create({ title, content, createdBy });
    res.status(201).json(document);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create document' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const document = await Document.findByPk(req.params.id);
    if (document) {
      res.json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve document' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, content, createdBy } = req.body;
    const document = await Document.findByPk(req.params.id);
    if (document) {
      document.title = title;
      document.content = content;
      document.createdBy = createdBy;
      await document.save();
      res.json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update document' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const document = await Document.findByPk(req.params.id);
    if (document) {
      await document.destroy();
      res.json({ message: 'Document deleted' });
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

module.exports = router;
