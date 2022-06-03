const AWS = require(`aws-sdk`);

const updateProduct = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { name } = JSON.parse(event.body);

    await dynamodb.update({
        TableName: "ProductsTable",
        Key: {id},
        UpdateExpression: "set name = :name",
        ExpressionAttributeValues: {
            ":name": name
        },
        ReturnValues: `ALL_NEW`

    }).promise()

    return {
        status: 200,
        body: JSON.stringify({
            massage: `dato updateado`
        }),
    };
};


module.exports = {
    updateProduct,
}