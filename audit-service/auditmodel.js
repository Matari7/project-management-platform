const AWS = require('aws-sdk');

const recordLoginAttempt = (userId, email, success, timestamp) => {
  // Crear el cliente de DynamoDB dentro de la función
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: 'audit_logs',
    Item: {
      id: AWS.util.uuid.v4(),
      userId: userId,
      email: email,
      success: success,
      timestamp: timestamp
    }
  };

  return dynamoDB.put(params).promise();
};

module.exports = {
  recordLoginAttempt,
};
