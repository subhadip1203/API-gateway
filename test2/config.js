const config = [{
    incomingURL: "/v1/test/:id",
    incomingMethod: "DELETE",
    destination: [
        {
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/:id',
            responseName: 'x'
        }, 
         {
            aggregator: ({x,id}) => {
                return x.data/id;
            },
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/:id/:x',
            responseName: 'y',
            responseFunc : ({res,id}) => {
                return res*id
            }
        }
    ]
}]

module.exports = config;