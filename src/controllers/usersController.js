const fs = require('fs');
const bcrypt = require ('bcrypt');
let usersArray = JSON.parse(fs.readFileSync('users.json',{encoding:'utf-8'}));

module.exports = {
    login: function (req, res) {
        res.render('./users/login');
    },
    register: function (req, res) {
        res.render('./users/registro');
    },
    crearCuenta: function(req,res){
        if (req.body.password == req.body.passwordConfirm){
        let usuario = {
            id: usersArray.length+1,
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            //imagen:
            birth_date: req.body.date,
        }
        usersArray.push(usuario);
        fs.writeFileSync('users.json',JSON.stringify(usersArray));
        res.send(req.body);
        } else {
            res.send("Las contraseñas no coinciden");
        };
    },
    cart: function (req, res) {
        res.render('./users/carrito');
    },   
}