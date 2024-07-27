const { getDocumentById } = require('./documentmodel');

class DocumentService {
  static async getDocument(id) {
    return await getDocumentById(id);
  }
}

module.exports = DocumentService;
