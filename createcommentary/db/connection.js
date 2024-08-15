const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelizeProject = new Sequelize(process.env.PROJECT_DB_NAME, process.env.PROJECT_DB_USER, process.env.PROJECT_DB_PASSWORD, {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql',
});

// Configuration db 'users'
const userDb = new Sequelize(process.env.USER_DB_NAME, process.env.USER_DB_USER, process.env.USER_DB_PASSWORD, {
    host: process.env.USER_DB_HOST,
    dialect: 'mysql',
});

const commentDb = new Sequelize(process.env.COMMENTARY_DB_NAME, 
    process.env.COMMENTARY_DB_USER, 
    process.env.COMMENTARY_DB_PASSWORD, {
    host: process.env.COMMENTARY_DB_HOST,
    dialect: 'mysql',
});


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

    commentDb.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos de users establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos de users:', err);
    });


  module.exports = { sequelizeProject, userDb, commentDb };
