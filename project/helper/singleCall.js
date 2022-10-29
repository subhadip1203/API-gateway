export async function SingleAPICall(v2) {
	try{
		const secondaryMethod = v2.method || method;
		const options = {}
		APIResult = await request(secondaryMethod, v2.url, options)
		if (v2.response) {
			response = v2.response
			return response
		}
		console.log(response)
	} catch(err) {
		return null
	}
	
}