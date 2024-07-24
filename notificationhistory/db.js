const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  region: "local",
  endpoint: "http://dynamodb-local:8000"  // Docker service name and port for DynamoDB Local
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

module.exports = ddbDocClient;
