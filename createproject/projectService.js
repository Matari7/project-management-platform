const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const createDatabasePools = require('./db');
const projectModel = require('./projectModel');

class ProjectService extends EventEmitter {
  constructor() {
    super();
    this.initializeDatabaseConnection();
  }

  async initializeDatabaseConnection() {
    try {
      const { mysqlUsersPool, mysqlProjectsPool } = await createDatabasePools();
      this.mysqlUsersPool = mysqlUsersPool;
      this.mysqlProjectsPool = mysqlProjectsPool;
      console.log('Database connection pools established successfully');
    } catch (error) {
      console.error('Error initializing database connection pools:', error);
    }
  }

  async createProject(name, description, start_date, end_date, status, user_id) {
    if (!this.mysqlUsersPool || !this.mysqlProjectsPool) {
      throw new Error('Database connection pools are not initialized');
    }

    const project = await projectModel.createProject(
      this.mysqlUsersPool,
      this.mysqlProjectsPool,
      name,
      description,
      start_date,
      end_date,
      status,
      user_id
    );
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
