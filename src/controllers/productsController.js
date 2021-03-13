const fs = require ('fs');
const path = require ('path');
const db = require ('../database/models/index');
const { Op } = require("sequelize");


module.exports = {
    list: function (req, res){
        db.Producto.findAll({
            include: ['images']
        })
        .then(function(resultado){
            res.render ('./products/productList', {
                productsArray: resultado,
            });
        })
    },
    cafe: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 2
            },
            include: ['images']
        })
        .then(function(resultado){
            res.render ('./products/productList', {
                productsArray: resultado,
            });
        })
    },
    vino: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 1
            },
            include: ['images']
        })
        .then(function(resultado){
            res.render ('./products/productList', {
                productsArray: resultado,
            });
        })
    },
    libros: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 4
            },
            include: ['images']
        })
        .then(function(resultado){
            res.render ('./products/productList', {
                productsArray: resultado,
            });
        })
    },
    musica: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 3
            },
            include: ['images']
        })
        .then(function(resultado){
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
    search: function(req,res){
        db.Producto.findAll({
            where: {
                nombre: {
                    [Op.like]: '%'+req.query.search+'%',
                    }
                },
                include: ['images']
            })            
            .then(function(resultado){
                res.render('./products/productList',{
                productsArray: resultado,
                search: req.query.search //para que en la vista se imprima lo que estábamos buscando
                }) // Hacer un if en la vista para que si no encontró nada, devuelva un mensaje
            })
        }
}