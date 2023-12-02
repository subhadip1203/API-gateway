const axios = require('axios');

async function axiosCall(url , method, data = {}) {
    try{
        if (method == "GET"){
            const res_data = await axios.get(url)
            if( res_data.statusText == 'OK'){
                return res_data.data
            } else{
                throw new Error("Error  Method : "+method+" URL : "+url);
            }
            
        }
        else if (method.toUpperCase() == "POST"){
            const res_data = await axios.post(url, data)
            if( res_data.statusText == 'OK'){
                return res_data.data
            } else{
                throw new Error("Error  Method : "+method+" URL : "+url);
            }
        }
        else if (method.toUpperCase() == "PATCH"){
            const res_data = await axios.patch(url, data)
            if( res_data.statusText == 'OK'){
                return res_data.data
            } else{
                throw new Error("Error  Method : "+method+" URL : "+url);
            }
        }
        else if (method.toUpperCase() == "PUT"){
            const res_data = await axios.put(url, data)
            if( res_data.statusText == 'OK'){
                return res_data.data
            } else{
                throw new Error("Error  Method : "+method+" URL : "+url);
            }
        }
        else if (method.toUpperCase() == "DELETE"){
            const res_data = await axios.delete(url, data)
            if( res_data.statusText == 'OK'){
                return res_data.data
            } else{
                throw new Error("Error  Method : "+method+" URL : "+url);
            }
        }
    } catch(err){
        console.log('Error in Axios call')
        throw err;
    }
    
}

module.exports = axiosCall;