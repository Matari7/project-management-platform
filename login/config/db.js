import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
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

export default sequelize;
