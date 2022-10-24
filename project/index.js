const http = require("http")
const router = require("find-my-way")();
const config = require("./config");
const request = require("./axios")

config.forEach((v) => {
	console.log("running ...");
	router.all(v.endpoint, async (req, res, params) => {
		const headers = req.headers;
		const method = req.method;
		let result = null
		let response = null
		console.log(params);
		for await (const v2 of v.destination) {
			const secondaryMethod = v2.method || method;
			const options = {}
			result = await request(secondaryMethod, v2.url, options)
			if (v2.response) {
				response = v2.response
			}
			console.log(response)
		}
		if (response && response.type === 'JSON') {
			res.end(JSON.stringify(result));
		}
		else {
			res.end(result);
		}

	});
});

//{"userId":1,"id":1,"title":"delectus aut autem","completed":false}

const server = http.createServer((req, res) => {
	router.lookup(req, res);
});

server.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on: http://localhost:3000");
});
