import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(process.env.TASK_DB_NAME!, process.env.TASK_DB_USER!, process.env.TASK_DB_PASSWORD!, {
    host: process.env.TASK_DB_HOST,
    dialect: 'mysql',
});

export default sequelize;
