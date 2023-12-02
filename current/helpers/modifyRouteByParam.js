const modifyRouteByParams = (url, params) => {
    let error = ''
    const urlArr = url.split('/');
    const colonParams = {};
    for (p in params) {
        colonParams[':' + p] = params[p];
    }

    for (let i = 0; i < urlArr.length; i++) {
        if (urlArr[i].charAt(0) === ':') {
            if(urlArr[i].includes('.')){
                const substringsArr = urlArr[i].split('.')
                if (colonParams[substringsArr[0]] ) {
                    const restOfKeys = substringsArr.slice(1);
                    const dynamicValue = findValue(colonParams[substringsArr[0]], restOfKeys)
                    if(dynamicValue){
                        urlArr[i] = dynamicValue
                    } else{
                        error += urlArr[i]+' not available , '
                    }
                    
                }
            }
            else if (colonParams[urlArr[i]]) {
                urlArr[i] = colonParams[urlArr[i]];
            } else{
                error += urlArr[i]+' not available , '
            }
        } 
    }
    if(error){
        throw new Error(error)
    } else{
        return urlArr.join('/')
    }
    
};


function findValue(obj, keys) {
    if (!obj || keys.length === 0) {
        return null;
    }

    const [currentKey, ...remainingKeys] = keys;

    if (obj[currentKey]) {
        if(typeof obj[currentKey] == "object"){
            return findValue(obj[currentKey], remainingKeys);
        } else{
            return obj[currentKey]
        }
    } else {
        return null
    }
}

module.exports = modifyRouteByParams;
