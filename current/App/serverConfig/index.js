const express = require('express');
const cookieParser = require('cookie-parser');
const destinationController = require('./destinationController');

async function runServer(routeConfig) {
    try {
        // console.log(JSON.stringify(routeConfig, null, 4));
        const app = express();

        app.use(cookieParser());
        app.use(express.json());

        for (routes in routeConfig) {
            app.all(routes, async (req, res) => {
                try {
                    const requestMethod = req.method.toUpperCase();
                    const requestMethodConfig =
                        routeConfig[routes][requestMethod] || routeConfig[routes]['ANY'] || null;
                    if (!requestMethodConfig) {
                        res.status(405).send({
                            method: requestMethod,
                            message: 'Method Not Allowed'
                        });
                    } else {
                        const routeState = {
                            requestParams: req.params || {},
                            requestBody: req.body || {}
                        };
                        const finaldata = await destinationController(requestMethodConfig.destinations, routeState);
                        res.send({data :  finaldata });
                    }
                } catch (err) {
                    console.log(err.message);
                    res.send({err : err.message });
                }
            });
        }

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
