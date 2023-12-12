const deStructureStates = (state) => {
    let stateObj = {}
    for(key in state){
        if(key == 'requestBody'){
            for(bodyKey in state[key]) {
                const newKeyName = 'body_'+bodyKey
                stateObj [newKeyName] = state[key][bodyKey] 
            }
        } else{
            stateObj = {...stateObj , ...state[key]}
        }
        
    }
    return stateObj
}

module.exports = deStructureStates