module.exports = app => {
    app.post('/users/signup', (req, res) => {
        console.log(req.body)
    })
}