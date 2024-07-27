const { deleteDocument } = require('./documentmodel');

class DocumentService {
  static async deleteDocument(id) {
    return await deleteDocument(id);
  }
}

module.exports = DocumentService;
