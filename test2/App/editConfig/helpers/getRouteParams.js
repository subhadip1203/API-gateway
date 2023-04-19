
function getRouteParams(routeString) {
    const routeArr = routeString.split("/");
    const paramsWithColon = routeArr.filter((v) => v.charAt(0) === ':' );
    const params  = paramsWithColon.map((v) => v.substring(1) );
    // console.log(params)
    return params
    
}
  
module.exports = getRouteParams;