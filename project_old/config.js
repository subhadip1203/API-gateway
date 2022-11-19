const config = [
	{
		endpoint: "/v1/test",
		chain: true,
		destination: [{
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos/1',
			response: {
				name: 'data',
				type: 'JSON'
			}
		}, {
			input: {
				type: 'one-to-one',
				values: {
					':id': "data.id"
				}
			},
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos/:id',
			response: {
				name: 'data2',
				type: 'JSON'
			}
		}]
	},
	{
		endpoint: "/v1/test/:id", 
		destination: [{
			input: {
				type: 'one-to-one',
				values: {
					':id': "id"
				}
			},
			url: 'https://jsonplaceholder.typicode.com/todos/:id',
			response: {
				name: 'data',
				type: 'JSON'
			}
		}]
	},
	{ endpoint: "/v1/test/ok/*" },
	{ endpoint: "/example" },
];

module.exports = config
