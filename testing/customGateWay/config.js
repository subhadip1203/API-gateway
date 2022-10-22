const config = [
	{
		endpoint: "/v1/test" , 
		destination: {
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos/1'
		}
	},
	{endpoint: "/v1/test/:id"},
	{endpoint: "/v1/test/ok/*"},
	{endpoint: "/example"},
];

module.exports = config
