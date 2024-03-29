
const axios = require("axios");


async function request(method, url, options, data) {
    try {
        const ApiResult = await axios({ method, url, ...options, transformResponse: x => x, data: data })
        return ApiResult
    }
    catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return 'API call error'
    }
}


async function APIcall(Method, URL, responseType = 'JSON', Options, Data) {
    try {

        APIResult = await request(Method, URL, Options, Data)
        if (APIResult.data) {
            if (responseType === 'JSON' || responseType === 'json' || responseType === 'Json') {
                const APiResultData = JSON.parse(APIResult.data)
                console.log(APiResultData)
                return APiResultData
            } else {
                return APIResult.data
            }
        }
        else {
            return null
        }

    } catch (err) {
        console.log(err)
        return null
    }

}

module.exports = APIcall