const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userService');
const createUserService = require('../create-user/userService'); // Importa el servicio de creación de usuario
const updateUserService = require('../update-user/userService'); // Importa el servicio de actualización de usuario
const deleteUserService = require('../delete-user/userService'); // Importa el servicio de eliminación de usuario

const app = express();
app.use(bodyParser.json());

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3002, () => {
  console.log('Read User service running on port 3002');
});

// Simulación de subscripción a eventos de otros servicios
createUserService.on('userCreated', (event) => {
  console.log('User created event received in read-user service:', event);
  // Aquí puedes manejar el evento, por ejemplo, actualizar un caché
});

updateUserService.on('userUpdated', (event) => {
  console.log('User updated event received in read-user service:', event);
  // Aquí puedes manejar el evento, por ejemplo, actualizar un caché
});

deleteUserService.on('userDeleted', (event) => {
  console.log('User deleted event received in read-user service:', event);
  // Aquí puedes manejar el evento, por ejemplo, eliminar un caché
});
