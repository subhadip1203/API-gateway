const http = require("http")
const router = require("find-my-way")();
const config = require("./config");


const updateURL = require('./helper/urlReplacer')
const APIcall = require('./helper/APIcall')

config.forEach((v) => {
	console.log("running ...");
	router.all(v.endpoint, async (req, res, params) => {
		const method = req.method;
		const headers = req.headers;
		console.log(req.body)
		const body = {}
		console.log(method, headers, params, body);
		const paramInput = { ...params }
		for await (const v2 of v.destination) {
			const updatedURL = updateURL(v2.url, paramInput)
			const APIcallData = await APIcall(method, updatedURL, 'JSON', {}, body)
			console.log(v2.url, updatedURL,APIcallData)
		}
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


