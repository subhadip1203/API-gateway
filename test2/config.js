const config = [{
    incomingURL: "/v1/test/:id",
    destination: [
        {
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            responseName: 'x'
        }, 
         {
            aggregator: ({x,id}) => {
                return x.data/id;
            },
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/:id',
            responseName: 'y',
            responseFunc : ({res,id}) => {
                return res*id
            }
        }
    ]
}]

module.exports = config;