import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.FILE_DB_NAME, process.env.FILE_DB_USER, process.env.FILE_DB_PASSWORD, {
    host: process.env.FILE_DB_HOST,
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

export default sequelize;
