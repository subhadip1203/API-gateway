const config = [
	{
		endpoint: "/v1/todos",
		destination: [{
			url: 'https://jsonplaceholder.typicode.com/todos',
			response_name: 'data'
		}]
	},
	{
		endpoint: "/v1/test/:id",
		destination: [{
			url: 'https://jsonplaceholder.typicode.com/todos/:id',
			response_name: 'data'
		}]
	},
	{
		endpoint: "/v1/test/ok/*",
		destination: [{
			url: 'https://jsonplaceholder.typicode.com/*',
			response_name: 'data'
		}]
	},
	{
		endpoint: "/post",
		destination: [{
			url: 'https://jsonplaceholder.typicode.com/posts',
			response_name: 'data'
		}]
	},
	{
		endpoint: "/v1/test",
		chain: true,
		destination: [{
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos/1',
			response_name: 'data'
		}, {
			paramInput: {
				'id': {
					source: 'data',
					value : (data) => data.id
				}
			},
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos/:id',
			response_name: 'data'
		}]
	},
];

module.exports = config
