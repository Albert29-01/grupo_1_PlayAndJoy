const fs = require ('fs');
const path = require ('path');
/*const { DATE } = require('sequelize/types');*/
const { validationResult } = require('express-validator');
const db = require ('../database/models/index');

module.exports = {
    vistaProd: function (req, res){
        db.Producto.findByPk(req.params.idProduct)
        .then(function(resultado){
            res.render ('./admin/adminProduct', {
                producto: resultado,
            });
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    vistaSuscrip: function (req, res){
        db.Suscripcion.findByPk(req.params.idSuscription)
        .then(function(resultado){
            res.render ('./admin/adminSuscription', {
                suscripcion: resultado,
            });
        })
        .catch(function(e){
            res.render("404_notFound")
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
            return res.send("Producto " + req.params.idProduct + " eliminado con éxito!");
        },
        deleteSuscrip:function (req, res){
            db.Suscripcion.destroy({            
                where: {
                    id:req.params.idSuscription,
                }
            })
            return res.send("Suscripción " + req.params.idSuscription + " eliminada con éxito!");
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
                        nombre: req.files.length !=0?req.files[0].filename:imagen.nombre,
                    },{
                        where: {
                            id_product: req.params.idProduct
                        }
                    })
                    return res.send("Producto " + req.params.idProduct + " actualizado con éxito!");
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
                    return res.send("Suscripción " + req.params.idSuscription + " actualizada con éxito!");
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
                            nombre:  req.files.length != 0? req.files[0].filename: 'imagenDefault.png',
                            id_product: resultado.id
                        })
                        res.redirect('/admin/product/'+resultado.id)
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
                        res.redirect('/admin/suscription/'+resultado.id)
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