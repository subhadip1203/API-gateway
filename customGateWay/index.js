const axios = require("axios");
const router = require("find-my-way")();
const config = require("./config");

config.forEach((v) => {
	console.log("running ...");
	router.all(v.endpoint, (req, res, params) => {
		const headers = req.headers;
		console.log(params);
		res.end(`{"message": "${v.endpoint}"}`);
	});
});

const server = http.createServer((req, res) => {
	router.lookup(req, res);
});

server.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on: http://localhost:3000");
});
