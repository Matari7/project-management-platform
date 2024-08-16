const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./config/db');
const loginRoutes = require('./routes/loginRoutes');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura la sesión
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');

// Rutas
app.use('/', loginRoutes);

// Sincronizar la base de datos
db.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch(err => console.log('Error connecting to the database', err));
