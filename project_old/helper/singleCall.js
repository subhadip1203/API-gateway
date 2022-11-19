async function SingleAPICall(v2) {
	try {
		const secondaryMethod = v2.method || method;
		const options = {
			transformResponse: res => res,
			responseType: 'text'
		}
		console.log(v2)
		APIResult = await request(secondaryMethod, v2.url, options)
		console.log(APIResult)
		if (APIResult.data) {
			return APIResult.data
		}
		else{
			return null
		}
	} catch (err) {
		return null
	}

}

module.exports = { SingleAPICall }