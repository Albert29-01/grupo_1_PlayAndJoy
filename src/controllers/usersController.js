module.exports = {
    login: function (req, res) {
        res.render('./users/login');
    },
    register: function (req, res) {
        res.render('registro');
    },
    cart: function (req, res) {
        res.render('carrito');
    }   
}