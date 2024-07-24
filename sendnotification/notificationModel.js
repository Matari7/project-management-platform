const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const ddbDocClient = require("./db");

const tableName = "Notifications";

const createNotification = async (notification) => {
  const params = {
    TableName: tableName,
    Item: notification,
  };
  await ddbDocClient.send(new PutCommand(params));
  return notification;
};

module.exports = { createNotification };
