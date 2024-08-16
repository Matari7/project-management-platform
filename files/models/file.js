import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const File = sequelize.define('files', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileSize: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

export default File;
