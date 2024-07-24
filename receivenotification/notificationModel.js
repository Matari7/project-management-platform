const { GetCommand } = require("@aws-sdk/lib-dynamodb");
const ddbDocClient = require("./db");

const tableName = "Notifications";

const getNotificationById = async (id) => {
  const params = {
    TableName: tableName,
    Key: { id },
  };
  const { Item } = await ddbDocClient.send(new GetCommand(params));
  return Item;
};

module.exports = { getNotificationById };
