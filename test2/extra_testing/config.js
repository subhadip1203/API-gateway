const config = [{
    endpoint: "/v1/test",
    chain: true,
    destination: [{
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        response_name: 'x'
    }, {
        paramInput: {
            keys: ["x", "y"],
            result: ({ x, y }) => {
              return x.data / y.data;
            },
        },
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/:id',
        response_name: 'data'
    }]
}]