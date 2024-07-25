const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const projectModel = require('./projectModel');

class ProjectService extends EventEmitter {
  async updateProject(id, name, description) {
    const project = await projectModel.updateProject(id, name, description);
    this.emit('projectUpdated', {
      eventType: 'ProjectUpdated',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: project,
    });
    return project;
  }
}

module.exports = new ProjectService();
