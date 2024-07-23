const pool = require('./db');

const createProject = (name, description) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *',
      [name, description],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

module.exports = {
  createProject,
};
