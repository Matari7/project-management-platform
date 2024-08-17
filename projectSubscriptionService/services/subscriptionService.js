const Subscription = require('../models/Subscription');
const User = require('../models/User');
const Project = require('../models/Project'); 
const sendMessage = require('./kafkaProducer');

// Function to subscribe a user to a project
const subscribeToProject = async (user_id, project_id) => {
    try {
        // Check if the user exists
        const user = await User.findByPk(user_id);
        if (!user) {
            throw new Error('User ID does not exist');
        }

        // Check if the project exists
        const project = await Project.findByPk(project_id);
        if (!project) {
            throw new Error('Project ID does not exist');
        }

        // Create the subscription
        const subscription = await Subscription.create({ user_id, project_id });

        // Send message to Kafka
        sendMessage('project_subscriptions', { user_id, project_id });

        return subscription;
    } catch (error) {
        throw new Error('Error subscribing to project: ' + error.message);
    }
};

// Function to get all subscriptions
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
