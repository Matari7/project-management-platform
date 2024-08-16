import File from '../models/file.js';

export const uploadFile = async (fileData) => {
    try {
        const newFile = await File.create(fileData);
        return newFile;
    } catch (error) {
        throw new Error('Error uploading file');
    }
};

export const getAllFiles = async () => {
    try {
        return await File.findAll();
    } catch (error) {
        throw new Error('Error fetching files');
    }
};
