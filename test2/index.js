const config = require("./config");
const editConfig = require("./editConfig")

function updateConfig() {
  try{
    const routeConfig = editConfig(config);
    console.log(JSON.stringify(routeConfig, null, 4))
  } catch(err){
    console.log(err.message)
  }
}


updateConfig()

