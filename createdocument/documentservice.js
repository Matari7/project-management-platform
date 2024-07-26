const { EventEmitter } = require('events');
const { v4: uuidv4 } = require('uuid');
const documentModel = require('./documentmodel');
const projectModel = require('./projectmodel');

class DocumentService extends EventEmitter {
  async createDocument(name, path, projectId) {
    const projectExists = await projectModel.checkProjectExists(projectId);
    if (!projectExists) {
      throw new Error('Project not found');
    }

    const document = await documentModel.createDocument(name, path, projectId);
    this.emit('documentCreated', {
      eventType: 'DocumentCreated',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: document,
    });
    return document;
  }
}

module.exports = new DocumentService();
