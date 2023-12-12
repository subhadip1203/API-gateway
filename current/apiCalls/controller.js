const axiosCall = require("../helpers/axiosHelper");
const modifyRouteByParams = require("../helpers/modifyRouteByParam");
const resultModifier = require("../helpers/resultModifier")


async function apiCalls(config, result, requestParams, requestbody) {
    try {
        const intermediateData = { ...requestParams }
        let dataToSend =  {...requestbody}
        for (let index = 0; index < config.length; index++) {
            const eachDestination = config[index]

            const responseName = eachDestination.responseName
            if(eachDestination.dataToSend){
                dataToSend = resultModifier(eachDestination.dataToSend, intermediateData)
                console.log(dataToSend)
            }
            const modifiedUrl = modifyRouteByParams(eachDestination.url, intermediateData)
            const return_data = await axiosCall(modifiedUrl, eachDestination.method , dataToSend )
            intermediateData[responseName] = return_data
            dataToSend = {}
        }

        const newResult = resultModifier(result, intermediateData)
        return newResult
    }

    catch (error) {
        throw error;
    }

}



module.exports = apiCalls;
