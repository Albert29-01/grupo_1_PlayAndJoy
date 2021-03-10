const bcrypt = require ('bcryptjs');
const path = require ('path');
const db = require ('../database/models/index')

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
    profile: function (req, res) {
        return res.render('./users/profile',{
            user: req.session.usuarioLogueado,
        });
    },
    editProfile: function (req, res) {
        for (let i=0; i<usersArray.length; i++){
            if(usersArray[i].id == req.params.idUser){
                res.render ('./users/editProfile',{
                    user: usersArray[i],//acá recuperaríamos los datos del producto que queremos editar
                });
            }
        }
    },
    register: function (req, res) {
        return res.render('./users/registro',{
            errors: undefined
        });
    },
    crearCuenta: function(req,res,next){
        if (req.body.password == req.body.passwordConfirm){ 
            db.Usuario.findOrCreate({
                where: {
                    email: req.body.email,
                },
                defaults: {
                    first_name: req.body.nombre,
                    last_name: req.body.apellido,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    imagen: req.files[0].filename,
                    birth_date: req.body.date,
                    domicilio: req.body.domicilio,
                    localidad: req.body.localidad,
                    provincia: req.body.provincia,
                }
            })
            .then (function(resultado){
                if(!resultado[1]){
                    return res.render('./users/registro', {
                        errors: [ 
                            {
                                errors:
                                {msg: "Usuario ya existente"},
                            }
                        ]
                    })
                } else {
                    return res.redirect('/users/login')
                }
            })
        } else {
            return res.render('./users/registro', {
                errors: [ 
                    {
                        errors:
                        {msg: "Las contraseñas no coinciden"},
                    }
                ]
            })
        }
},
cart: function (req, res) {
    return res.render('./users/carrito');
},   
}