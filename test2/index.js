require("dotenv").config();
const config = require("./config");
const editConfig = require("./App/editConfig");
const runServer = require("./App/serverConfig");

async function updateConfig() {
  try {
    const routeConfig = editConfig(config);
    // await runServer(routeConfig)
  } catch (err) {
    console.log(err.message);
  }
};

updateConfig();
