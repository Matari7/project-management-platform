const commentaryModel = require('./commentaryModel');

class CommentaryService {
  async readCommentaries(projectId) {
    return await commentaryModel.readCommentaries(projectId);
  }
}

module.exports = new CommentaryService();
