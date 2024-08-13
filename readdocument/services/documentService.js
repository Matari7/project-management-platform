const Document = require('../models/document');
const User = require('../../create-user/src/models/User'); // Asegúrate de que la ruta sea correcta
const Project = require('../../createproject/src/models/Project');

exports.getDocumentsByProjectAndUser = async ({ projectId, userId }) => {
    console.log('Getting documents for projectId:', projectId, userId);

    // Verifica que el usuario exista
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User does not exist');
    }

    // Verifica que el proyecto exista
    const project = await Project.findByPk(projectId);
    if (!project) {
        throw new Error('Project does not exist');
    }

    // Busca los documentos asociados con el proyecto y el usuario
    const documents = await Document.findAll({ where: { project_id: projectId } });
    console.log('Documents retrieved from database:', documents);

    return documents;
};

