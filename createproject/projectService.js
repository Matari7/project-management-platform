const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const projectModel = require('./projectModel');

class ProjectService extends EventEmitter {
  async createProject(name, description) {
    const project = await projectModel.createProject(name, description);
    this.emit('projectCreated', {
      eventType: 'ProjectCreated',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: project,
    });
    return project;
  }
}

module.exports = new ProjectService();
