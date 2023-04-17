const getParamNames = require("./helpers/getFuncParam");
const subArrayChecker = require("./helpers/subArrayChecker");

// any error in any of the route config
const configError = [];
const allRouteConfig = [];

if (Array.isArray(config)) {
  for (const routeConfig of config) {
    const routeConfigErrors = {};
    const routeConfig = {};

    // incoming URL
    if (routeConfig.incomingURL) {
      routeConfig.incomingURL = routeConfig.incomingURL;
    } else {
      routeConfigErrors.incomingURL = "not avaiable";
    }

    // input available variables for aggregation
    // temporary variable
    const availableVariables = [];

    if (!routeConfig.destination || !Array.isArray(routeConfig.destination)) {
      routeConfigErrors.destination = "destination is not an array";
    } else {
      for (const destinationConfig of routeConfig.destination) {
        const destinationDetails = {};

        if (!destinationConfig.method) {
          routeConfigErrors.destination = "destination method not available";
        } else {
          destinationDetails.outgoingMethod = destinationConfig.method;
        }
        if (!destinationConfig.url) {
          routeConfigErrors.destination = "outgoing URL not available";
        } else {
          destinationDetails.outgoingURL = destinationConfig.url;
        }

        destinationDetails.outgoingResponseName =
          destinationConfig.response_name;

        if (destinationConfig.aggregator) {
          const aggregatorInputs = getParamNames(destinationConfig.aggregator);
          const isAllVariablesAvailable = subArrayChecker(
            availableVariables,
            aggregatorInputs
          );
          if (!isAllVariablesAvailable) {
            destinationDetails.aggregatorInputs = aggregatorInputs;
          } else {
            routeConfigErrors.aggregator = "input params are not available";
          }
        }
        if (Object.keys(routeConfigErrors).length) {
          console.log(routeConfigErrors);
        } else {
          // update variable name of the response
          availableVariables.push(destinationConfig.response_name);
          routeConfig.APIDestination.push(destinationDetails);
        }
      }
    }

    console.log(routeConfig);
    console.log(availableVariables);
  }
}