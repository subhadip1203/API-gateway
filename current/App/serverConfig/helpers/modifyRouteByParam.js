const modifyRouteByParams = (url, params) => {
    let error = ''
    const urlArr = url.split('/');
    const colonParams = {};
    for (p in params) {
        colonParams[':' + p] = params[p];
    }
    console.log(colonParams);

    for (let i = 0; i < urlArr.length; i++) {
        if (urlArr[i].charAt(0) === ':') {
            if (colonParams[urlArr[i]]) {
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

module.exports = modifyRouteByParams;
