const { exec } = require('child_process');

const services = [
    { name: 'login', command: 'npm start --prefix ./login' },
    { name: 'create-user', command: 'npm start --prefix ./create-user' },
    { name: 'createcommentary', command: 'npm start --prefix ./createcommentary' },
    { name: 'createdocument', command: 'npm start --prefix ./createdocument' },
    { name: 'createproject', command: 'npm start --prefix ./createproject' },
    { name: 'createtask-service', command: 'npm start --prefix ./createtask-service' },
    { name: 'delete-user', command: 'npm start --prefix ./delete-user' },
    { name: 'deletecommentary', command: 'npm start --prefix ./deletecommentary' },
    { name: 'deletedocument', command: 'npm start --prefix ./deletedocument' },
    { name: 'deleteproject', command: 'npm start --prefix ./deleteproject' },
    { name: 'files', command: 'npm start --prefix ./files' },
    { name: 'frontend', command: 'npm start --prefix ./frontend' },
    { name: 'order-service', command: 'npm start --prefix ./order-service' },
    { name: 'product-service', command: 'npm start --prefix ./product-service' },
    { name: 'projectSubscriptionService', command: 'npm start --prefix ./projectSubscriptionService' },
    { name: 'readcommentaries', command: 'npm start --prefix ./readcommentaries' },
    { name: 'readproject', command: 'npm start --prefix ./readproject' },
    { name: 'readtask-service', command: 'npm start --prefix ./readtask-service' },
    { name: 'update-user', command: 'npm start --prefix ./update-user' },
    { name: 'updatecommentary', command: 'npm start --prefix ./updatecommentary' },
    { name: 'updatedocument', command: 'npm start --prefix ./updatedocument' },
    { name: 'updateproject', command: 'npm start --prefix ./updateproject' },
    { name: 'user-role-service', command: 'npm start --prefix ./user-role-service' }
];

services.forEach(service => {
    console.log(`Starting ${service.name}...`);
    exec(service.command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting ${service.name}:`, error);
            return;
        }
        console.log(`Output for ${service.name}:`, stdout);
        if (stderr) {
            console.error(`Errors for ${service.name}:`, stderr);
        }
    });
});
