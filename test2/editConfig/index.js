const getRouteParams = require("./helpers/getRouteParams")
const getParamNames = require("./helpers/getFuncParam");
const subArrayChecker = require("./helpers/subArrayChecker");


function editConfig(userConfig) {
    if (Array.isArray(userConfig)) {
        let configIndex = 0;
        for (const routeConfig of userConfig) {
            
            /*======================================================
            storing available variable needed for aggregation
            =======================================================*/
            const availableVariables = []
          
            /*=================== Error Handling ===================
            1. check if incoming url is available
            2. check if destibnation setup available
            // ======================================================*/
            
            if (!routeConfig.incomingURL) {
                throw new Error(`IncomingURL is  is missing , which is mandetory : { config Index ${configIndex} } `)
            } 
            if (!routeConfig.destination || routeConfig.destination.length === 0) {
                throw new Error(`Destination setup  is missing , which is mandetory : { config Index ${configIndex} }`)
            } 

            /*======================================================
            storing request.params in  aggregation variable
            =======================================================*/
            const reqParam = getRouteParams(routeConfig.incomingURL)
            if(reqParam.length > 0){
                for (x of reqParam){
                    availableVariables.push(x) 
                }
            }
            
            let destinationIndex = 0;
            for (const destinationConfig of routeConfig.destination) {
                if (!destinationConfig.url) {
                    throw new Error(` Destination URL is mandetory : { config Index ${configIndex} , destination Index ${destinationIndex}  }`)
                } 
                if (destinationConfig.aggregator) {
                    const aggregatorInputs = getParamNames(destinationConfig.aggregator);
                    const isAllVariablesAvailable = subArrayChecker(availableVariables, aggregatorInputs );
                    if(!isAllVariablesAvailable){
                        throw new Error(`Aggregator variable is not available : { config Index ${configIndex} , destination Index ${destinationIndex}  } `)
                    }
                }

                /*======================================================
                storing available variable needed for aggregation
                =======================================================*/
                availableVariables.push(destinationConfig.response_name);
                destinationIndex++;
            }

            
            configIndex++;
      
        }
    }
}


module.exports = editConfig;