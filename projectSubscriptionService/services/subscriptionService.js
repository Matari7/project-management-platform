const Subscription = require('../models/Subscription');
const User = require('../models/User'); // Asegúrate de que la ruta sea correcta
const Project = require('../models/Project'); // Asegúrate de que la ruta sea correcta
const sendMessage = require('./kafkaProducer');

const subscribeToProject = async (user_id, project_id) => {
    try {
        // Verificar si el usuario existe
        const user = await User.findByPk(user_id);
        if (!user) {
            throw new Error('User ID does not exist');
        }

        // Verificar si el proyecto existe
        const project = await Project.findByPk(project_id);
        if (!project) {
            throw new Error('Project ID does not exist');
        }

        // Crear la suscripción
        const subscription = await Subscription.create({ user_id, project_id });

        // Enviar mensaje a Kafka
        sendMessage('project_subscriptions', { user_id, project_id });

        return subscription;
    } catch (error) {
        throw new Error('Error subscribing to project: ' + error.message);
    }
};

const getAllSubscriptions = async () => {
    try {
        return await Subscription.findAll();
    } catch (error) {
        throw new Error('Error fetching subscriptions: ' + error.message);
    }
};

module.exports = {
    subscribeToProject,
    getAllSubscriptions
};
