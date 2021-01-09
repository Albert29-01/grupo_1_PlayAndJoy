module.exports = {
    login: function (req, res) {
        res.render('../views/users/login');
    },
    register: function (req, res) {
        res.render('../views/users/registro');
    },
    cart: function (req, res) {
        res.render('../views/users/carrito');
    },   
}