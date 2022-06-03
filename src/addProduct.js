const { v4 } = require(`uuid`);
const AWS = require(`aws-sdk`);

const addProduct = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { name, description, image_url, price } = JSON.parse(event.body)
    const id = v4()
    const newProduct = {
        id,
        name,
        description,
        image_url,
        price
    }

    await dynamodb.put({
        TableName: `ProductsTable`,
        Item: newProduct
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(newProduct),
    }
}

module.exports = {
    addProduct,
}