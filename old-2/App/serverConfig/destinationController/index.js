const deStructureStates = require('../helpers/stateStructure')
const modifyRouteByParams = require('../helpers/modifyRouteByParam')

const destinationController = async (destination, state ) =>{
    try{
        const stateData = deStructureStates(state)
        for(let x of destination){
            const modifiedUrl = modifyRouteByParams( x.outgoingURL , stateData)
            return (modifiedUrl)
        }
    } catch(err) {
        throw new Error(err.message)
    }
    
}

module.exports = destinationController