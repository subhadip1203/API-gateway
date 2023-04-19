const express = require("express");
const cookieParser = require("cookie-parser");
const controllers = require("./controllers");

async function runServer(routeConfig) {
  try {
    console.log(JSON.stringify(routeConfig, null, 4));
    const app = express();

    app.use(cookieParser());
    app.use(express.json());

    routeConfig.forEach((r) => {
      if (r.incomingMethod === "GET") {
        app.get(r.incomingURL, controllers.get);
      } else if (r.incomingMethod === "POST") {
        app.post(r.incomingURL, controllers.post);
      } else if (r.incomingMethod === "PUT") {
        app.put(r.incomingURL, controllers.put);
      } else if (r.incomingMethod === "DELETE") {
        app.delete(r.incomingURL, controllers.delete);
      } else {
        throw new Error("Only supported methods are GET , POST , PUT , DELETE");
      }
    });

    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = runServer;
