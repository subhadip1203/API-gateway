function subArrayChecker(mainArr,subArr) {
    if(subArr.length == 0) {
        return true
    }
    let status = true
    subArr.forEach(element => {
        if(mainArr.includes(element) === false ) {
            status =  false
        }
    });
    return status
}

module.exports = subArrayChecker;