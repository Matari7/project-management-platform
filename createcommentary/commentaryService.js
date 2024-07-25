const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const commentaryModel = require('./commentaryModel');

class CommentaryService extends EventEmitter {
  async createCommentary(projectId, user_id, content) {
    const commentary = await commentaryModel.createCommentary(projectId, user_id, content);
    this.emit('commentaryCreated', {
      eventType: 'CommentaryCreated',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: commentary,
    });
    return commentary;
  }
}

module.exports = new CommentaryService();
