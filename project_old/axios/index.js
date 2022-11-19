const axios = require("axios");


async function request(method, url, options) {
  try{
    console.log({method,url,...options})
    const ApiResult = await axios({method,url,...options,transformResponse: x => x})
    if(ApiResult && ApiResult.data){
      const returnData = ApiResult.data;
      console.log(returnData)
      return returnData
    }
    else{
      console.log('ApiResult', ApiResult)
      return []
    }
  }
  catch(err){
    console.log(err)
    return [0]
  }
}


module.exports = request