const express = require('express');
const bodyParser = require('body-parser');
const auditService = require('./auditservice');

const app = express();
app.use(bodyParser.json());

app.listen(3007, () => {
  console.log('Audit service running on port 3007');
});
