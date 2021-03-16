module.exports = {
    index: function (req, res) {
        console.log(res.locals)
        res.render('index');
    },
}