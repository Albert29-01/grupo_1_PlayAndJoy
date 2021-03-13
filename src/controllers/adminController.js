const fs = require ('fs');
const path = require ('path');
/*const { DATE } = require('sequelize/types');*/
const db = require ('../database/models/index');

module.exports = {
    vistaProd: function (req, res){
        db.Producto.findByPk(req.params.idProduct)
        .then(function(resultado){
            res.render ('./admin/adminProduct', {
                producto: resultado,
            });
        })
    },
    vistaSuscrip: function (req, res){
        db.Suscripcion.findByPk(req.params.idSuscription)
        .then(function(resultado){
            res.render ('./admin/adminSuscription', {
                suscripcion: resultado,
            });
        })
    },
    formCargaP: function (req, res){
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render ('./admin/cargaProducto',{
                categorias
            });
        })
    },
    formCargaS: function (req, res){
        res.render ('./admin/cargaSuscripcion');
    },
    formEditP: function(req,res) {
        db.Categoria.findAll()
        .then(function(categorias){
            db.Producto.findByPk(req.params.idProduct)
            .then(function(resultado){
                res.render ('./admin/cargaProducto',{
                    metodo: "PUT",
                    producto: resultado,
                    categorias
                });
            })
        })        
    },
    formEditS: function(req,res){
        db.Suscripcion.findByPk(req.params.idSuscription)
        .then(function(resultado){
            res.render ('./admin/cargaSuscripcion',{
                metodo: "PUT",
                suscripcion: resultado,
            });
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
            nombre: req.files[0].filename,
        },{
            where: {
                id_product: req.params.idProduct
            }
        })
        return res.send("Producto " + req.params.idProduct + " actualizado con éxito!");
    },
    editSuscrip: function (req, res){
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
    },
    cargaProduct:function(req,res){
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
                nombre: req.files[0].filename,
                id_product: resultado.id
            })
            res.redirect('/admin/admin/'+resultado.id)
        })
        .catch(function(error){
            console.log(error)
        })
    },
    cargaSuscription:function(req,res){
        db.Suscripcion.create({
            nombre: req.body.tipoSuscripcion,
            detalle: req.body.detalle,
            precio: req.body.precio,
        })
        .then(function(resultado){
            res.redirect('/admin/suscription/'+resultado.id)
        })
        .catch(function(error){
            console.log(error)
        })
    },
}