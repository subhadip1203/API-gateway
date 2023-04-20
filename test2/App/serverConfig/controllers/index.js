const controllers = {

    get : function (req,res) {
        const requestparams = req.params || {}
        res.send('GET')
    },
    post : function (req,res) {
        const requestparams = req.params || {}
        const requestBody = req.body || {}
        res.send('POST')
    },
    put : function (req,res) {
        const requestparams = req.params || {}
        const requestBody = req.body || {}
        res.send('PUT')
    },
    delete : function (req,res) {
        const requestparams = req.params || {}
        res.send('DELETE')
    },

}

module.exports = controllers