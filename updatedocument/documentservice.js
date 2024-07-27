const { updateDocument } = require('./documentmodel');

class DocumentService {
  static async updateDocument(id, documentData) {
    return await updateDocument(id, documentData);
  }
}

module.exports = DocumentService;
