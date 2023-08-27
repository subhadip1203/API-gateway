require("dotenv").config();
const config = require("./config");
const editConfig = require("./App/editConfig");
const runServer = require("./App/serverConfig");

async function updateConfig() {
  try {
    const routeConfig = editConfig(config);
    // console.log(JSON.stringify(routeConfig, null, 4));
    await runServer(routeConfig)
  } catch (err) {
    console.log(err.message)
  }
};

updateConfig();
