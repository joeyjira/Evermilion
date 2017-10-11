const User = require('./user');

module.exports = {
    // greeting: function(req, res) {
    //     res.send({ hi: 'there' })
    // },

    create(req, res) {
        console.log(req);
        res.send({ hi: 'there' })
    }
}