const Document = require('../models/document');
const User = require('../../create-user/src/models/User');
const Project = require('../../createproject/src/models/Project');

exports.getDocumentsByProjectAndUser = async ({ projectId, userId }) => {
    console.log('Getting documents for projectId:', projectId, 'and userId:', userId);

    try {
        // Verifica que el usuario exista
        const user = await User.findByPk(userId);
        if (!user) {
            console.log('User not found:', userId);
            throw new Error('User does not exist');
        }
        console.log('User found:', user);

        // Verifica que el proyecto exista
        const project = await Project.findByPk(projectId);
        if (!project) {
            console.log('Project not found:', projectId);
            throw new Error('Project does not exist');
        }
        console.log('Project found:', project);

        // Busca los documentos asociados con el proyecto y el usuario
        const documents = await Document.findAll({ where: { project_id: projectId, user_id: userId } });
        console.log('Documents retrieved from database:', documents);

        return documents;
    } catch (error) {
        console.error('Error in getDocumentsByProjectAndUser:', error);
        throw error;
    }
};

// Exporta las funciones para que puedan ser consumidas por el servicio SOAP
module.exports = {
    getDocumentsByProjectAndUser: (args, callback) => {
        console.log('SOAP request received with args:', args);
        exports.getDocumentsByProjectAndUser(args)
            .then(documents => {
                console.log('Returning documents via SOAP:', documents);
                callback(null, { documents });
            })
            .catch(err => {
                console.error('Error in SOAP response:', err);
                callback(err);
            });
    }
};
