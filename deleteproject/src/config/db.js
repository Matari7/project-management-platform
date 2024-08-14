const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PROJECT_DB_NAME,
     process.env.PROJECT_DB_USER, 
     process.env.PROJECT_DB_PASSWORD,
      {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql'
});

const sequelizeUser = new Sequelize(
  process.env.USER_DB_NAME,
  process.env.USER_DB_USER,
  process.env.USER_DB_PASSWORD,
  {
    host: process.env.USER_DB_HOST,
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));


module.exports = { sequelize, sequelizeUser };
