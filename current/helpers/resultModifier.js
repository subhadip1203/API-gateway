function findValue(obj, keys) {
    if (!obj || keys.length === 0) {
        return null;
    }

    const [currentKey, ...remainingKeys] = keys;

    if (obj[currentKey]) {
        if (typeof obj[currentKey] == "object") {
            return findValue(obj[currentKey], remainingKeys);
        } else {
            return obj[currentKey]
        }
    } else {
        return null
    }
}

function resultModifier(obj, source) {

    if (Array.isArray(obj)) {
        return obj.map(item => resultModifier(item, source));
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = resultModifier(obj[key], source);
            }
        }
        return newObj;
    } else {
        const keyArr = obj.split('.')
        value = findValue(source, keyArr)
        return value
    }


}



module.exports = resultModifier;


