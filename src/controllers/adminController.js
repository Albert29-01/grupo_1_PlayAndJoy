const { validationResult } = require('express-validator');
const db = require ('../database/models/index');

module.exports = {
    index: function(req,res){
        res.render('./admin/adminIndex')
    },
    users: function(req,res){
        db.Usuario.findAll()
        .then(function(usuarios){
            return res.render('./admin/adminUsers',{
            usuarios
            })
        })
    },
    usersDelete: function(req,res){
        db.Usuario.destroy({
            where: {
                id: req.params.idUser
            }
        })
    },
    formCargaP: function (req, res){
        let errors = validationResult(req);
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render ('./admin/cargaProducto',{
                categorias,
                errors
            });
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    formCargaS: function (req, res){
        let errors = validationResult(req);
        res.render ('./admin/cargaSuscripcion',{
            errors
        });
    },
    formEditP: function(req,res) {
        let errors = validationResult(req);
        db.Categoria.findAll()
        .then(function(categorias){
            db.Producto.findByPk(req.params.idProduct,
                {include: ['images']})
                .then(function(resultado){
                    res.render ('./admin/cargaProducto',{
                        metodo: "PUT",
                        producto: resultado,
                        categorias,
                        errors
                    });
                })
            }) 
            .catch(function(e){
                res.render("404_notFound")
            })       
        },
        formEditS: function(req,res){
            let errors = validationResult(req);
            db.Suscripcion.findByPk(req.params.idSuscription)
            .then(function(resultado){
                res.render ('./admin/cargaSuscripcion',{
                    metodo: "PUT",
                    suscripcion: resultado,
                    errors
                });
            })
            .catch(function(e){
                res.render("404_notFound")
            })
        },
        deleteProd: function (req, res){
            db.Producto.destroy({            
                where: {
                    id:req.params.idProduct,
                }
            })
            .then(()=>{
                res.redirect('/product')
            })
        },
        deleteSuscrip:function (req, res){
            db.Suscripcion.destroy({            
                where: {
                    id:req.params.idSuscription,
                }
            })
            .then(()=>{
                res.redirect('/suscriptions')
            })
        },
        editProd: function (req, res){
            let errors = validationResult(req);
            if(errors.isEmpty()){
                db.Image.findOne({
                    where: {
                        id_product: req.params.idProduct
                    }
                })
                .then((imagen)=>{
                    db.Producto.update({
                        nombre: req.body.nombreProducto,
                        precio: req.body.precio,
                        detalle: req.body.detalle,
                        stock: req.body.cantidad,
                        info_ad: req.body.infoAd,
                        id_categoria: req.body.categoria
                    },{
                        where: {
                            id:req.params.idProduct,
                        }
                    })
                    db.Image.update({
                        nombre: typeof req.files.imagen != 'undefined'?req.files.imagen[0].filename:imagen.nombre,
                    },{
                        where: {
                            id_product: req.params.idProduct
                        }
                    })
                    .then(()=>{
                        res.redirect('/product/'+ req.params.idProduct);
                    })
                })
            } else {
                db.Categoria.findAll()
                .then(function(categorias){
                    db.Producto.findByPk(req.params.idProduct,
                        {include: ['images']})
                        .then(function(resultado){
                            res.render ('./admin/cargaProducto',{
                                metodo: "PUT",
                                producto: resultado,
                                categorias,
                                errors: errors.errors
                            });
                        })
                    }) 
                    .catch(function(e){
                        res.render("404_notFound")
                    })      
                }
            },
            editSuscrip: function (req, res){
                let errors = validationResult(req);
                if(errors.isEmpty()){
                    db.Suscripcion.update({
                        nombre: req.body.tipoSuscripcion,
                        detalle: req.body.detalle,
                        precio: req.body.precio,
                    },{
                        where: {
                            id:req.params.idSuscription,
                        }
                    })
                    .then(()=>{
                        res.redirect('/suscriptions/'+req.params.idSuscription)
                    })
                } else {
                    db.Suscripcion.findByPk(req.params.idSuscription)
                    .then(function(resultado){
                        res.render ('./admin/cargaSuscripcion',{
                            metodo: "PUT",
                            suscripcion: resultado,
                            errors: errors.errors
                        });
                    })
                    .catch(function(e){
                        res.render("404_notFound")
                    })
                }
            },
            cargaProduct:function(req,res){
                let errors = validationResult(req);
                console.log(errors)
                if(errors.isEmpty()){
                    db.Producto.create({
                        nombre: req.body.nombreProducto,
                        precio: req.body.precio,
                        detalle: req.body.detalle,
                        stock: req.body.cantidad,
                        info_ad: req.body.infoAd,
                        id_categoria: req.body.categoria
                    })
                    .then(function(resultado){
                        db.Image.create({
                            nombre: req.files.imagen[0].filename,
                            id_product: resultado.id
                        })
                        res.redirect('/product/'+resultado.id)
                    })
                    .catch(function(e){
                        res.render("404_notFound")
                    })
                } else {
                    let errors = validationResult(req);
                    db.Categoria.findAll()
                    .then(function(categorias){
                        return res.render ('./admin/cargaProducto',{
                            categorias,
                            errors: errors.errors
                        });
                    })
                }
            },
            cargaSuscription:function(req,res){
                let errors = validationResult(req);
                if(errors.isEmpty()){
                    db.Suscripcion.create({
                        nombre: req.body.tipoSuscripcion,
                        detalle: req.body.detalle,
                        precio: req.body.precio,
                    })
                    .then(function(resultado){
                        res.redirect('/suscriptions/'+resultado.id)
                    })
                    .catch(function(e){
                        res.render("404_notFound")
                    })
                } else {
                    res.render ('./admin/cargaSuscripcion',{
                        errors: errors.errors
                    });
                }
            },
        }