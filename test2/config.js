const config = [{
    incomingURL: "/v1/test/:id",
    destination: [
        {
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            response_name: 'x'
        }, 
         {
            aggregator: ({x,id}) => {
                return x.data/id;
            },
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/:id',
            response_name: 'y'
        }
    ]
}]

module.exports = config;