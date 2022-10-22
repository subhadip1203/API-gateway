const axios = require("axios");


async function request(method, url, options) {
  try{
    const data = axios({method,url,...options})
  }
  catch(err){
    return null
  }
}


module.exports = request