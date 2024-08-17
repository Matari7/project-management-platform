import File from '../models/file.js';

// Service function to handle file upload and save the file data to the database
export const uploadFile = async (fileData) => {
    try {
        const newFile = await File.create(fileData); // Create a new file record in the database
        return newFile; // Return the newly created file record
    } catch (error) {
        throw new Error('Error uploading file'); // Throw an error if the file upload fails
    }
};

// Service function to retrieve all files from the database
export const getAllFiles = async () => {
    try {
        return await File.findAll(); // Fetch and return all file records from the database
    } catch (error) {
        throw new Error('Error fetching files'); // Throw an error if fetching files fails
    }
};
