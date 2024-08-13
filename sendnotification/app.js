const express = require('express');
const notificationRoutes = require('./routes/notificationRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
