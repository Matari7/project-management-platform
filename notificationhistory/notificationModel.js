const { QueryCommand } = require("@aws-sdk/lib-dynamodb");
const ddbDocClient = require("./db");

const tableName = "Notifications";

const getNotificationHistoryByUserId = async (userId) => {
  const params = {
    TableName: tableName,
    IndexName: "userId-index",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": userId,
    },
  };
  const { Items } = await ddbDocClient.send(new QueryCommand(params));
  return Items;
};

module.exports = { getNotificationHistoryByUserId };
