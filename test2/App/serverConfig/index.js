const express = require("express");
const cookieParser = require("cookie-parser");
// const controllers = require("./controllers");

async function runServer(routeConfig) {
  try {
    console.log(JSON.stringify(routeConfig, null, 4));
    const app = express();

    app.use(cookieParser());
    app.use(express.json());



    routeConfig.forEach((r) => {
      app.all(r.incomingURL , (req,res) =>{
        const requestparams = req.params || {}
        res.send({method: req.method , param : requestparams})
      })
    });

    /*====================================================
    creating server
    =====================================================*/
    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = runServer;
