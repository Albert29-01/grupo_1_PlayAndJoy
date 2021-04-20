const bcrypt = require ('bcryptjs');
const db = require ('../database/models/index');
const { validationResult } = require('express-validator');
const provinciasRequest = require('../request/provinciasRequest');
const localidadesRequest = require('../request/localidadesRequest');

module.exports = {
    login: function (req, res) {
        let errors = validationResult(req);
        return res.render('./users/login', {
            errors,
        });
    },
    logout:function (req, res) {
        req.session.usuarioLogueado = undefined;
        res.cookie("remember",undefined,{maxAge:0});
        res.redirect('/');
    },
    session: function (req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Usuario.findOne({
                where:{
                    email: req.body.email
                } 
            })
            .then(function(usuario){
                if(usuario == null){
                    errors.errors.push({msg: "Usuario no encontrado"})
                    return res.render('./users/login', {
                        errors: errors.errors
                    });
                } else {
                    if(bcrypt.compareSync(req.body.password,usuario.password)){
                        req.session.usuarioLogueado = usuario;
                        if (req.body.remember != undefined){
                            res.cookie("remember", req.session.usuarioLogueado.id,{maxAge:30 * 24 * 60 * 60 * 1000});
                        }
                        return res.redirect('/');
                    } else {
                        errors.errors.push({msg: "Contraseña incorrecta"})
                        return res.render('./users/login', {
                            errors: errors.errors
                        });
                    }
                }
            })
            .catch(function(e){
                res.render("404_notFound")
            })
        } else {
            return res.render('./users/login', {
                errors: errors.errors
            });
        }
    },
    profile: function (req, res) {
        db.Usuario.findByPk(req.params.idUser)
        .then(function(user){
            return res.render('./users/profile',{
                user,
            });
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    editProfile: function (req, res) {
        let errors = validationResult(req);
        db.Usuario.findByPk(req.params.idUser)
        .then(function(user){
            return res.render('./users/editProfile',{
                user,
                errors
            });
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    editPassword: function (req, res) {
        let errors = validationResult(req);
        db.Usuario.findByPk(req.params.idUser)
        .then(function(user){
            return res.render('./users/editPassword',{
                user,
                errors
            });
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    updateProfile: function (req, res) {
        db.Usuario.findByPk(req.params.idUser)
        .then(function(resultado){
            let avatar = resultado.imagen
            let errors = validationResult(req);
            if(errors.isEmpty()){
                provinciasRequest.getProvincias(req.body.provincia)
                .then((prov)=>{
                    localidadesRequest.getLocalidades(req.body.localidad)
                    .then((local)=>{
                        db.Usuario.update({
                            first_name: req.body.nombre,
                            last_name: req.body.apellido,
                            email: req.body.email,
                            imagen: typeof req.files.avatar != 'undefined'? req.files.avatar[0].filename: avatar, 
                            domicilio: req.body.domicilio,
                            localidad: local.data.localidades[0].nombre,
                            provincia: prov.data.provincias[0].nombre,
                        },{
                            where: {
                                id: req.params.idUser
                            }
                        })
                        .then(function(usuarioActualizado){
                            return res.redirect('/users/profile/'+req.session.usuarioLogueado.id);
                        })
                        .catch(function(e){
                            res.render("404_notFound")
                            console.log(e)
                        })
                    })
                })
            } else {
                db.Usuario.findByPk(req.params.idUser)
                .then(function(user){
                    return res.render('./users/editProfile',{
                        user,
                        errors: errors.errors
                    });
                })
                .catch(function(e){
                    res.render("404_notFound")
                })
            }
        })
    },
    updatePassword: function(req,res){
        return res.json(req.body) //NO FUNCA!!!
        let errors = validationResult(req);
        if(errors.isEmpty()){
            if (req.body.password == req.body.passwordConfirm){ 
                db.Usuario.update({
                    password: bcrypt.hashSync(req.body.password, 12),
                },{
                    where: {
                        id: req.params.idUser,
                    }
                })
                .then (function(resultado){
                    req.session.usuarioLogueado = undefined;
                    res.cookie("remember",undefined,{maxAge:0});
                    return res.redirect('/users/login')
                })
                .catch(function(e){
                    console.log(e)
                    res.render("404_notFound")
                })
            } else {
                db.Usuario.findByPk(req.params.idUser)
                .then(function(user){
                    errors.errors.push({msg: "Las contraseñas no coinciden"})
                    return res.render('./users/editPassword',{
                        user,
                        errors: errors.errors
                    });
                })
                .catch(function(e){
                    res.render("404_notFound")
                })
            }
        } else {
            db.Usuario.findByPk(req.params.idUser)
            .then(function(user){
                return res.render('./users/editPassword',{
                    user,
                    errors: errors.errors
                });
            })
            .catch(function(e){
                console.log(e)
                res.render("404_notFound")
            })
        }
    },
    register: function (req, res) {
        let errors = validationResult(req);
        return res.render('./users/registro',{
            errors,
        });
    },
    crearCuenta: function(req,res,next){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            if (req.body.password == req.body.passwordConfirm){
                provinciasRequest.getProvincias(req.body.provincia)
                .then((prov)=>{
                    localidadesRequest.getLocalidades(req.body.localidad)
                    .then((local)=>{
                        db.Usuario.findOrCreate({
                            where: {
                                email: req.body.email,
                            },
                            defaults: {
                                first_name: req.body.nombre,
                                last_name: req.body.apellido,
                                email: req.body.email,
                                password: bcrypt.hashSync(req.body.password, 12),
                                imagen: typeof req.files.avatar != 'undefined'? req.files.avatar[0].filename: 'avatarDefault.jpg',
                                birth_date: req.body.date,
                                domicilio: req.body.domicilio,
                                localidad: local.data.localidades[0].nombre,
                                provincia: prov.data.provincias[0].nombre,
                            }
                        })
                        .then (function(resultado){
                            if(!resultado[1]){ // si devuelve FALSE es que no se creó el usuario
                                errors.errors.push({msg: "Usuario ya registrado"})
                                return res.render('./users/registro', {
                                    errors: errors.errors
                                })
                            } else {
                                return res.redirect('/users/login')
                            }
                        })
                        .catch(function(e){
                            res.render("404_notFound")
                        })
                    })
                }) 
            } else {
                errors.errors.push({msg: "Las contraseñas no coinciden"})
                return res.render('./users/registro', {
                    errors: errors.errors
                })
            }
        }else {
            return res.render('./users/registro', {
                errors: errors.errors
            });
        }
    },
    cart: function (req, res) {
        return res.render('./users/carrito');
    },   
}