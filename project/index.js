const http = require("http")
const router = require("find-my-way")();
const config = require("./config");


const updateURL = require('./helper/urlReplacer')
const APIcall = require('./helper/APIcall')


function getReqBody(req) {
	return new Promise((resolve, reject) => {
		try {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});
			req.on("end", () => {
				resolve(body);
			});
		} catch (error) {
			reject(error);
		}
	});
}

config.forEach((v) => {
	console.log("running ...");
	router.all(v.endpoint, async (req, res, params) => {
		const method = req.method;
		const headers = req.headers;
		const body = await getReqBody(req)
		console.log('method', method);
		console.log('headers', headers);
		console.log('params', params);
		console.log('body', body);
		const paramInput = { ...params }
		if (v.destination) {
			for await (const v2 of v.destination) {
				const updatedURL = updateURL(v2.url, paramInput)
				console.log(updatedURL)
				const APIcallData = await APIcall(method, updatedURL, 'JSON', {}, body)
				console.log(v2.url, updatedURL, APIcallData)
			}
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


