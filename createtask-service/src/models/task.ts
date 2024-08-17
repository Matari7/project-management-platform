import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

// Interface defining the attributes of a Task
interface TaskAttributes {
    id: number;
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Interface for Task creation, where the 'id' field is optional
interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

// Task model class definition extending Sequelize's Model class
class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public title!: string;
    public description!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Task model with the necessary fields and options
Task.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,           // Pass the Sequelize instance
        tableName: 'tasks',  // Define the table name in the database
    }
);

export default Task;
