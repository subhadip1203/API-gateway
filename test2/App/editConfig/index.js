const getRouteParams = require("./helpers/getRouteParams")
const getParamNames = require("./helpers/getFuncParam");
const subArrayChecker = require("./helpers/subArrayChecker");


function editConfig(userConfig) {
    /*======================================================
    The config variable for creating routes
    =======================================================*/
    const serverFullConfig = []

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
                /*======================================================
                Checking if no destination url provided
                =======================================================*/
                if (!destinationConfig.url) {
                    throw new Error(` Destination URL is mandetory : { config Index ${configIndex} , destination Index ${destinationIndex}  }`)
                }
                /*======================================================
                Checking if dynamic URL variables available
                =======================================================*/ 
                const dynamicParams = getRouteParams(destinationConfig.url)
                if(dynamicParams){
                    const isAllVariablesAvailable = subArrayChecker(availableVariables, dynamicParams );
                    if(!isAllVariablesAvailable){
                        throw new Error(`URL params is not available : { config Index ${configIndex} , destination Index ${destinationIndex}  } `)
                    }
                }
                /*======================================================
                Checking if aggegator variables available
                =======================================================*/ 
                if (destinationConfig.aggregator) {
                    const aggregatorInputs = getParamNames(destinationConfig.aggregator);
                    const isAllVariablesAvailable = subArrayChecker(availableVariables, aggregatorInputs );
                    if(!isAllVariablesAvailable){
                        throw new Error(`Aggregator variable is not available : { config Index ${configIndex} , destination Index ${destinationIndex}  } `)
                    }
                }
                /*======================================================
                Checking if response function variables available
                =======================================================*/ 
                if (destinationConfig.responseFunc) {
                    const outputFuncInputs = getParamNames(destinationConfig.responseFunc);
                    const isAllVariablesAvailable = subArrayChecker([...availableVariables, 'res'], outputFuncInputs );
                    if(!isAllVariablesAvailable){
                        throw new Error(`response Func variable is not available : { config Index ${configIndex} , destination Index ${destinationIndex}  } `)
                    }
                }

                /*======================================================
                storing available variable needed for aggregation
                =======================================================*/
                availableVariables.push(destinationConfig.responseName);
                destinationIndex++;
            }
            configIndex++;
            /*======================================================
                Error handling done
            =======================================================*/

            /*======================================================
                editing config variable for express
            =======================================================*/
            const configRoute = {}
            configRoute.incomingURL = routeConfig.incomingURL,
            configRoute.incomingMethod =   routeConfig.incomingMethod || 'GET'
            configRoute.params = reqParam ? reqParam : []
            configRoute.destinations = []
            for (const destinationConfig of routeConfig.destination) {
                const destinationSetup = {
                    outgoingURL : destinationConfig.url,
                    outgoingMethod : destinationConfig.method,
                    responseName : destinationConfig.responseName,  
                }
                
                if(destinationConfig.aggregator){
                    const aggregatorInputs = getParamNames(destinationConfig.aggregator);
                    destinationSetup.inputVariables = [...aggregatorInputs]
                    destinationSetup.aggregator = destinationConfig.aggregator
                }
                if(destinationConfig.responseFunc){
                    const outputFuncInputs = getParamNames(destinationConfig.responseFunc);
                    destinationSetup.outputFuncVariables = [...outputFuncInputs]
                    destinationSetup.outputFunc = destinationConfig.responseFunc
                }
                configRoute.destinations.push(destinationSetup)
            }

            serverFullConfig.push(configRoute)

        }
    }

    return serverFullConfig;
}


module.exports = editConfig;