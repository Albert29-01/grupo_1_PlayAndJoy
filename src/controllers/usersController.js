const bcrypt = require ('bcryptjs');
const db = require ('../database/models/index')

module.exports = {
    login: function (req, res) {
        return res.render('./users/login', {
            errors: undefined,
        });
    },
    logout:function (req, res) {
        req.session.usuarioLogueado = undefined;
        res.redirect('/');
    },
    session: function (req, res) {
        db.Usuario.findOne({
            where:{
                email: req.body.email
            } 
        })
        .then(function(usuario){
            if(usuario == null){
                return res.render('./users/login', {
                    errors: [
                        {msg: 'Usuario no encontrado'}
                    ]
                });
            } else {
                if(bcrypt.compareSync(req.body.password,usuario.password)){
                    req.session.usuarioLogueado = usuario;
                    return res.redirect('/');
                } else {
                    return res.render('./users/login', {
                        errors: [
                            {msg: 'Contraseña incorrecta'}
                        ]
                    });
                }
            }
        })
        .catch(function(error){
            res.json(error)
        })
    },
    profile: function (req, res) {
        return res.render('./users/profile',{
            user: req.session.usuarioLogueado,
        });
    },
    editProfile: function (req, res) { //TODAVIA NO FUNCIONA LA EDICION DE USUARIO
        db.Usuario.update({
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            imagen: req.files[0].filename,
            birth_date: req.body.date,
            domicilio: req.body.domicilio,
            localidad: req.body.localidad,
            provincia: req.body.provincia,
        },{
            where: {
                id: req.session.usuarioLogueado.id
            }
        })
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