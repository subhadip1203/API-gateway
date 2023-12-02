const config = [{
    incomingURL: "/v1/test/:id",
    incomingMethod: "GET",
    destination: [
        {
            url: 'https://jsonplaceholder.typicode.com/todos/:id',
            method: "GET",
            responseName: 'x'
        },
        {
            url: 'https://jsonplaceholder.typicode.com/todos/:x.userId',
            method: "GET",
            responseName: 'y'
        }
    ],
    result: {
        product : ["x.id" , "x.title"] , 
        user : { 
            id : "y.id" , 
            title : "y.title"
        }
    }
},



// {
//     incomingURL: "/v1/test/:id",
//     incomingMethod: "GET",
//     destination: [
//         {
//             method: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/todos/:id',
//             responseName: 'x'
//         }, 
//          {
//             input: ({x,id}) => {
//                 return x.data/id;
//             },
//             method: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/todos/:id/:x',
//             responseName: 'y',
//             responseFunc : ({res,id}) => {
//                 return res*id
//             }
//         }
//     ]
// }
]

module.exports = config;