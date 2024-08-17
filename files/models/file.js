import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

// Define the File model linked to the files table in the database
const File = sequelize.define('files', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,   // Automatically increment the ID for each new record
        primaryKey: true,      // Marks this field as the primary key
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,      // The fileName field is required
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false,      // The fileType field is required
    },
    fileSize: {
        type: DataTypes.BIGINT,
        allowNull: false,      // The fileSize field is required
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,      // The filePath field is required
    }
}, {
    timestamps: false // Disable automatic timestamp fields (createdAt, updatedAt)
});

export default File;
