const axios = require('axios');


async function getCall(url) {
    try{
        const res_data = await axios.get(url)
        if( res_data.statusText == 'OK'){
            return res_data.data
        } else{
            throw new Error("Error  Method : GET -  URL : "+url);
        }
    } catch(err){
        console.log('Error in Axios call')
        throw new Error("Error  Method : GET -  URL : "+url);
    }

}

async function postCall(url, data) {
    console.log(url, data)
    try{
        const res_data = await axios.post(url , data)
        if( res_data.status >= 200 && res_data.status < 300){
            return res_data.data
        } else{
            throw new Error("Error  Method : POST -  URL : "+url);
        }
    } catch(err){
        console.log('Error in Axios call')
        console.log(err)
        throw new Error("Error  Method : POST -  URL : "+url);
    }

}

async function patchCall(url, data) {
    try{
        const res_data = await axios.patch(url , data)
        if( res_data.statusText == 'OK'){
            return res_data.data
        } else{
            throw new Error("Error  Method : PATCH -  URL : "+url);
        }
    } catch(err){
        console.log('Error in Axios call')
        throw new Error("Error  Method : PATCH -  URL : "+url);
    }

}

async function putCall(url, data) {
    try{
        const res_data = await axios.put(url , data)
        if( res_data.statusText == 'OK'){
            return res_data.data
        } else{
            throw new Error("Error  Method : PUT -  URL : "+url);
        }
    } catch(err){
        console.log('Error in Axios call')
        throw new Error("Error  Method : PUT -  URL : "+url);
    }

}

async function deleteCall(url) {
    try{
        const res_data = await axios.delete(url)
        if( res_data.statusText == 'OK'){
            return res_data.data
        } else{
            throw new Error("Error  Method : DELETE -  URL : "+url);
        }
    } catch(err){
        console.log('Error in Axios call')
        throw new Error("Error  Method : DELETE -  URL : "+url);
    }

}



async function axiosCall(url , method, data = {}) {
    try{
        if (method == "GET"){
            return getCall(url)  
        }
        else if (method.toUpperCase() == "POST"){
            return postCall(url, data)
        }
        else if (method.toUpperCase() == "PATCH"){
            return patchCall(url, data)
        }
        else if (method.toUpperCase() == "PUT"){
            return putCall(url, data)
        }
        else if (method.toUpperCase() == "DELETE"){
            return deleteCall(url)
        }
    } catch(err){
        console.log('Error in Axios call')
        throw err.message;
    }
    
}

module.exports = axiosCall;