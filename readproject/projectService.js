const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const projectModel = require('./projectModel');

class ProjectService extends EventEmitter {
  async getProjectById(id) {
    const project = await projectModel.getProjectById(id);
    this.emit('projectRead', {
      eventType: 'ProjectRead',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: project,
    });
    return project;
  }
}

module.exports = new ProjectService();
