const controllers = {

    get : function (req,res) {
        res.send('GET')
    },
    post : function (req,res) {
        res.send('POST')
    },
    put : function (req,res) {
        res.send('PUT')
    },
    delete : function (req,res) {
        res.send('DELETE')
    },

}

module.exports = controllers