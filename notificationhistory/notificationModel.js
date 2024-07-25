const { QueryCommand } = require("@aws-sdk/lib-dynamodb");
const ddbDocClient = require("./db");

const tableName = "Notifications";

const getNotificationHistoryByUserId = async (user_id) => {
  const params = {
    TableName: tableName,
    IndexName: "user_id-index",
    KeyConditionExpression: "user_id = :user_id",
    ExpressionAttributeValues: {
      ":user_id": user_id,
    },
  };
  const { Items } = await ddbDocClient.send(new QueryCommand(params));
  return Items;
};

module.exports = { getNotificationHistoryByUserId };
