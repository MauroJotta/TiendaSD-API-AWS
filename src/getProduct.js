const AWS = require(`aws-sdk`);

const getProduct = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamodb.get({
        TableName: `ProductsTable`,
        HashKey: { id: id },
        })
        .promise()

    const product = result.Item;

    return {
        status: 200,
        body: product
    }
}

module.exports = {
    getProduct
}