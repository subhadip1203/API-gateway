

const config = [


    {
        incomingURL: "/v1/test1/:id",
        incomingMethod: "GET",
        destination: [
            {
                method: 'GET',
                url: 'http://127.0.0.1:8000/items/:id',
                responseName: 'x'
            }, 
             {
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/todos/:x.user_id',
                responseName: 'y',
            }
        ],
        result: {
            data : { 
                id : "x.item_id" , 
                title : "y.title"
            }
        }
    },



    {
        incomingURL: "/v1/test2",
        incomingMethod: "POST",
        destination: [
            {
                url: 'http://127.0.0.1:8000/items/',
                method: "POST",
                responseName: 'x'
            },
            {
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: "POST",
                dataToSend: {
                    "title": "iphone title",
                    "body": "some body",
                    "itemId": "x.id"
                },
                responseName: 'y'
            }
        ],
        result: {
            data : { 
                name : "x.name" , 
                title : "y.title",
                id: "y.id"
            }
        }
    },


]

module.exports = config;