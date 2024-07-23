const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const projectModel = require('./projectModel');

class ProjectService extends EventEmitter {
  async deleteProject(id) {
    const deleted = await projectModel.deleteProject(id);
    this.emit('projectDeleted', {
      eventType: 'ProjectDeleted',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: { id },
    });
    return deleted;
  }
}

module.exports = new ProjectService();
