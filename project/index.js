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
		let result = null
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

				if(v2.paramInput){
					for (const key in v2.paramInput) {
						console.log("ok ok")
						const source =  v2.paramInput[key].source
						const modifiedvalue =  v2.paramInput[key].value(result[source])
						paramInput[key] = modifiedvalue
					}
					console.log(paramInput)
				}


				const updatedURL = updateURL(v2.url, paramInput)
				// console.log(updatedURL)

				
				const APIcallData = await APIcall(method, updatedURL, 'JSON', {}, body)
				if (v2.response_name) {
					result = {}
					result[v2.response_name] = APIcallData
				}
				else {
					result = APIcallData
				}
				// console.log(v2.url, updatedURL, APIcallData)
			}
		}
		if (typeof result === 'object') {
			res.end(JSON.stringify(result));
		}
		else if (typeof result === 'string') {
			res.end(result);
		} else {
			res.end('error');
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


