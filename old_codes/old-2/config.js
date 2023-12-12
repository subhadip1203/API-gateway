// const config = [{
//     incomingURL: "/v1/test/:id",
//     incomingMethod: "POST",
//     destination: [
//         {
//             url: 'https://jsonplaceholder.typicode.com/todos/:id/:body_name',
//             responseName: 'x'
//         }
//     ]
// }]


const config = [{
    incomingURL: "/v1/test/:id",
    incomingMethod: "GET",
    destination: [
        {
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/:id',
            responseName: 'x'
        }, 
         {
            input: ({x,id}) => {
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