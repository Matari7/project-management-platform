const express = require('express');
const notificationHistoryRoutes = require('./routes/notificationHistoryRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/notificationhistory', notificationHistoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
