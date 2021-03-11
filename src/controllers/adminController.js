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
    formCargaP: function (req, res){
        db.Categoria.findAll()
        .then(function(categorias){
            return res.render ('./admin/cargaProducto',{
                categorias
            });
        })
    },
    formEditP: function(req,res) {
        db.Categoria.findAll()
        .then(function(categorias){
            db.Producto.findByPk(req.params.idProduct)
            .then(function(resultado){
                res.render ('./admin/cargaProducto',{
                    metodo: "PUT",
                    producto: resultado,
                    categorias//acá recuperaríamos los datos del producto que queremos editar
                });
            })
        })        
    },
    deleteProd: function (req, res){
        db.Producto.update({
            deleted_at: Date.now()
        },{
            where: {
                id:req.params.idProduct,
            }
        })
        return res.send("Producto " + req.params.idProduct + " eliminado con éxito!"); //acá enviaríamos los datos del producto eliminado
    },
    formCargaS: function (req, res){
        res.render ('./admin/cargaSuscripcion');
    },
    editProd: function (req, res){
        db.Producto.update({
            nombre: req.body.nombreProducto,
            precio: req.body.precio,
            detalle: req.body.detalle,
            stock: req.body.cantidad,
            info_ad: req.body.infoAd,
            id_categoria: req.body.categoria // no funciona la edición de categoria
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
            tipoSuscripcion: req.body.tipoSuscripcion,
            detalle: req.body.detalle,
            precio: req.body.precio,
            imagen: ""
        })
        .then(function(resultado){
            res.redirect('/suscriptions/'+resultado.id)
        })
        .catch(function(error){
            console.log(error)
        })
    },
}