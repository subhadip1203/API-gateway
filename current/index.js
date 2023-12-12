require("dotenv").config();
const config = require("./config");
const express = require('express');
const cookieParser = require('cookie-parser');

const apiCalls = require("./apiCalls/controller.js")

const app = express();

app.use(cookieParser());
app.use(express.json());



config.forEach((route) =>  {
    
    if (route.incomingMethod === 'GET'){
        app.get(route.incomingURL, async (req , res) => {
            try{
                const requestParams = req.params
        
                const result = await apiCalls(route.destination , route.result,  requestParams)
                res.send(result)
            } catch(err){
                console.log(err)
                res.status(500).send({ errmsg: err.message})
            }
        })

    } else if(route.incomingMethod === 'POST'){
        app.post(route.incomingURL, async function(req , res){
            try{
                const requestParams = req.params
                const requestbody = req.body
                const result = await apiCalls(route.destination , route.result,  requestParams , requestbody)
                res.send(result)
            } catch(err){
                console.log(err)
                res.status(500).send({ errmsg: err.message})
            }
        })

    } else if(route.incomingMethod === 'PUT'){
        app.put(route.incomingURL, async function(req , res){
            try{
                const requestParams = req.params
                const requestbody = req.body
                const result = await apiCalls(route.destination , route.result,  requestParams , requestbody)
                res.send(result)
            } catch(err){
                console.log(err)
                res.status(500).send({ errmsg: err.message})
            }
        })
        
    } else if(route.incomingMethod === 'PATCH'){
        app.patch(route.incomingURL, async function(req , res){
            try{
                const requestParams = req.params
                const requestbody = req.body
                const result = await apiCalls(route.destination , route.result,  requestParams , requestbody)
                res.send(result)
            } catch(err){
                console.log(err)
                res.status(500).send({ errmsg: err.message})
            }
        })
        
    }else if(route.incomingMethod === 'DELETE'){
        app.delete(route.incomingURL, async function(req , res){
            try{
                const requestParams = req.params
                const result = await apiCalls(route.destination , route.result,  requestParams)
                res.send(result)
            } catch(err){
                console.log(err)
                res.status(500).send({ errmsg: err.message})
            }
        })
    } else {
        app.all(route.incomingURL, async function(req , res){
            res.send({message:'Method not allowed'})
        })
    } 
})

/*====================================================
creating server
=====================================================*/
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
