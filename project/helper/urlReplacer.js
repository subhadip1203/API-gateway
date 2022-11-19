function updateURL(url, paramInput) {
    try {
        const newParamInputObj = {}
        // adding : to object keys
        for (const property in paramInput) {
            newParamInputObj[':'+property]=paramInput[property];
        }
        
        const arr = url.split("/")
        const err = []
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] && arr[i].charAt(0) == ':') {
                if (newParamInputObj[arr[i]]) {
                    arr[i] = newParamInputObj[arr[i]]
                }
                else {
                    err.push(arr[i])
                }
            }
        }
        if (err.length) {
            throw new Error(`dynamic value require for ${JSON.stringify(err)}`, );
        }
        else {
            return arr.join('/')
        }

    } catch (err) {
        return err
    }

}

module.exports = updateURL