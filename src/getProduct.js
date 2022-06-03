const AWS = require('aws-sdk');

const getProduct = async (event) => {

	const dynamodb = new AWS.DynamoDB.DocumentClient();
	const { id } = event.pathParameters;

const result = await dynamodb.get({
	Tablename: ProductsTable,
	key: {
		id: id
	}
}).promise

	const producto = result.item

	return {
		status: 200,
		body: producto,
	}

}

module.exports = {
	getProduct
}