const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.COMMENTARY_DB_NAME, 
    process.env.COMMENTARY_DB_USER, 
    process.env.COMMENTARY_DB_PASSWORD, 
    {
    host: process.env.COMMENTARY_DB_HOST,
    dialect: 'mysql'
});


const sequelizeProject = new Sequelize(process.env.PROJECT_DB_NAME, 
    process.env.PROJECT_DB_USER, 
    process.env.PROJECT_DB_PASSWORD, 
    {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql',
});

// Configuración de la base de datos 'users'
const userDb = new Sequelize(process.env.USER_DB_NAME, 
    process.env.USER_DB_USER, 
    process.env.USER_DB_PASSWORD, 
    {
    host: process.env.USER_DB_HOST,
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

userDb.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos de users establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos de users:', err);
    });
  

module.exports = { sequelize, sequelizeProject, userDb };
