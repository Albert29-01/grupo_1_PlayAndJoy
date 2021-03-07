const fs = require ('fs');
const path = require ('path');
const db = require ('../database/models/index');


module.exports = {
    list: function (req, res){
        db.Producto.findAll({
            where: {
                deleted_at: null
            },
            include: ['images'] //no funciona la imagen
        })
        .then(function(resultado){
            console.log("este es el resultado:",resultado)
            res.render ('./products/productList', {
                productsArray: resultado,
            });
        })
    },
    product: function (req, res){
        db.Producto.findByPk(req.params.idProduct)
        .then(function(resultado){
            res.render ('./products/product',{
                producto: resultado,
            });
        })
    },
}