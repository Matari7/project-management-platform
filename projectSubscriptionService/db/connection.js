const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.SUBSCRIPTION_DB_NAME, 
    process.env.SUBSCRIPTION_DB_USER, 
    process.env.SUBSCRIPTION_DB_PASSWORD, 
    {
    host: process.env.SUBSCRIPTION_DB_HOST,
    dialect: 'mysql'
});

const sequelizeProject = new Sequelize(process.env.PROJECT_DB_NAME, 
    process.env.PROJECT_DB_USER, 
    process.env.PROJECT_DB_PASSWORD, 
    {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql',
});



sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

  sequelizeProject.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos de projects establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos de projects:', err);
    });

module.exports = { sequelize, sequelizeProject };
