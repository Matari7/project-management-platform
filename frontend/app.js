document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { name: 'Auth Service', port: 4000 },
        { name: 'User Service', port: 4001 },
        { name: 'Project Service', port: 4002 },
        { name: 'Task Service', port: 4003 },
        { name: 'Document Service', port: 4004 },
        { name: 'Collab Service', port: 4005 },
        { name: 'Calendar Service', port: 4006 },
        { name: 'Notification Service', port: 4007 },
        { name: 'Comment Service', port: 4008 },
        { name: 'Search Service', port: 4009 }
    ];

    const servicesContainer = document.getElementById('services');

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service';
        serviceDiv.innerHTML = `<h2>${service.name}</h2><p>Running on port ${service.port}</p>`;
        servicesContainer.appendChild(serviceDiv);
    });
});
