const http = require("http")
const router = require("find-my-way")();
const config = require("./config");
const request = require("./axios")
const replaceUrl = require('./helper/urlReplacer')
const { SingleAPICall } = require('./helper/singleCall')

config.forEach((v) => {
	console.log("running ...");
	router.all(v.endpoint, async (req, res, params) => {
		const headers = req.headers;
		const method = req.method;
		let result = {}
		let response = null
		console.log(params);
		const chainLength = v.destination.length || 1
		console.log(chainLength)
		if (chainLength == 1) {
			// replace url dynamic value
			const newUrl = replaceUrl(v.destination[0].url, params)
			// Making API call
			console.log(newUrl)
			const ApiCallData = await SingleAPICall({ ...v.destination[0], url: newUrl })
			// checking type of response according to config file
			const type = v?.destination[0]?.response?.type || 'text'
			// converting data into JSON if type is JSON
			const Modifieddata = type === 'JSON' ? JSON.parse(ApiCallData) : ApiCallData
			// if config file has a name to response , then creating key from the name
			const key = v.destination[0].response.name || null
			if (key) {
				result[key] = Modifieddata
			}
			else {
				result = Modifieddata
			}
		}


		if (typeof result === 'object' && response && response.type === 'JSON') {
			res.end(JSON.stringify(result));
		}
		else {
			res.end(JSON.stringify(result));
		}

	});
});




const server = http.createServer((req, res) => {
	router.lookup(req, res);
});

server.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on: http://localhost:3000");
});
