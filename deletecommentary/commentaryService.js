const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const commentaryModel = require('./commentaryModel');

class CommentaryService extends EventEmitter {
  async deleteCommentary(id) {
    const success = await commentaryModel.deleteCommentary(id);
    if (success) {
      this.emit('commentaryDeleted', {
        eventType: 'CommentaryDeleted',
        eventId: uuidv4(),
        timestamp: new Date().toISOString(),
        data: { id },
      });
    }
    return success;
  }
}

module.exports = new CommentaryService();
