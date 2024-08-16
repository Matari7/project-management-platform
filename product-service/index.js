const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 4026;
app.listen(PORT, () => {
    console.log(`Product Service is running on port ${PORT}`);
});
