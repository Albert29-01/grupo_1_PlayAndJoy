const fs = require('fs');
const bcrypt = require ('bcryptjs');
const path = require ('path');
const route = path.join (__dirname, '../users.json');
let usersArray = JSON.parse(fs.readFileSync(route,{encoding:'utf-8'}));

module.exports = {
    login: function (req, res) {
        return res.render('./users/login', {
            errors: undefined,
        });
    },
    session: function (req, res) {
        let usuarioLogueado = undefined;
       for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password,usersArray[i].password)){
                    usuarioLogueado = usersArray[i];
                    break;
                }
            } 
        }
        if ( usuarioLogueado == undefined) {
            return res.render('./users/login', {
                errors: [
                    {msg: 'Mail o contraseña incorrectas'}
                ]
            });
        }
       req.session.usuarioLogueado = usuarioLogueado;
       return res.redirect('/');
    },
    register: function (req, res) {
        return res.render('./users/registro');
    },
    crearCuenta: function(req,res,next){
        if (req.body.password == req.body.passwordConfirm){
        let usuario = {
            id: usersArray[usersArray.length-1].id+1,
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            imagen: req.files[0].filename,
            birth_date: req.body.date,
        }
        usersArray.push(usuario);
        fs.writeFileSync(route,JSON.stringify(usersArray));
        return res.redirect('/users/login');
        } else {
            return res.send("Las contraseñas no coinciden");
        };
    },
    cart: function (req, res) {
        return res.render('./users/carrito');
    },   
}