const express = require("express");
const cookieParser = require("cookie-parser");
const axios = require("axios");

async function runServer(routeConfig) {
  try {
	// console.log(JSON.stringify(routeConfig, null, 4));
    const app = express();

    app.use(cookieParser());
    app.use(express.json());

    app.get("/*", async (req, res) => {
      res.send({ ping: 1 });
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
