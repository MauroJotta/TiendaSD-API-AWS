const AWS = require(`aws-sdk`);

const getProducts = async (event) => {
	const dynamodb = new AWS.DynamoDB.DocumentClient();

	const data = await dynamodb.scan({
		TableName: `ProductsTable`
	}).promise()

	const productos = data.Items

	return {
		status: 200,
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET",
			"Access-Control-Allow-Credentials": false,
		},
		body: {
			productos
		},
	}
}

module.exports = {
	getProducts
}