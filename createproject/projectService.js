const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const projectModel = require('./projectModel');

class ProjectService extends EventEmitter {
  async createProject(name, description, start_date, end_date, status, user_id) {
    const project = await projectModel.createProject(name, description, start_date, end_date, status, user_id);
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
