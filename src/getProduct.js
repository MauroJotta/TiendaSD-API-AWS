const AWS = require(`aws-sdk`);

const getProduct = async (event) => {
	const dynamodb = new AWS.DynamoDB.DocumentClient();
	const { id } = event.pathParameters;

	const result = await dynamodb.get({
		Tablename: `ProductsTable`,
		Key: {
			id
		}
	}).promise()

	const producto = result.Item;

	return {
		status: 200,
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET",
			"Access-Control-Allow-Credentials": false,
		},
		body: producto
	}

}

module.exports = {
	getProduct
};