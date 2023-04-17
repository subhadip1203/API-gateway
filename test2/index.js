const config = require("./config");
const editConfig = require("./editConfig")

function updateConfig() {
  try{
    editConfig(config);
  } catch(err){
    console.log(err.message)
  }
}


updateConfig()

