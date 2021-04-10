const db = require ('../../database/models/index');

module.exports = {
    list: function (req, res){
        db.Producto.findAll({
            include: ['images']
        })
        .then(function(productos){
            for (let i = 0; i < productos.length; i++) {
                productos[i].setDataValue('endopoint','api/product/'+productos[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: productos.length,
                    url: '/api/product'
                },
                data: productos
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    cafe: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 2
            },
            include: ['images']
        })
        .then(function(productos){
            for (let i = 0; i < productos.length; i++) {
                productos[i].setDataValue('endopoint','api/product/cafe/'+productos[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: productos.length,
                    url: '/api/product/cafe',
                    categoria: 'cafe'
                },
                data: productos
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    vino: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 1
            },
            include: ['images']
        })
        .then(function(productos){
            for (let i = 0; i < productos.length; i++) {
                productos[i].setDataValue('endopoint','api/product/vino/'+productos[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: productos.length,
                    url: '/api/product/vino',
                    categoria: 'vino'
                },
                data: productos
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    libros: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 4
            },
            include: ['images']
        })
        .then(function(productos){
            for (let i = 0; i < productos.length; i++) {
                productos[i].setDataValue('endopoint','api/product/libros/'+productos[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: productos.length,
                    url: '/api/product/libros',
                    categoria: 'libros'
                },
                data: productos
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    musica: function (req, res){
        db.Producto.findAll({
            where: {
                id_categoria: 3
            },
            include: ['images']
        })
        .then(function(productos){
            for (let i = 0; i < productos.length; i++) {
                productos[i].setDataValue('endopoint','api/product/musica/'+productos[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: productos.length,
                    url: '/api/product/musica',
                    categoria: 'musica'
                },
                data: productos
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
    product: function (req, res){
        db.Producto.findByPk(req.params.idProduct,{
            include: ['images'],
            include: ['categorias'],
        })
        .then(function(producto){
            for (let i = 0; i < producto.length; i++) {
                producto[i].setDataValue('endopoint','api/product/'+producto[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: producto.length,
                    url: '/api/product/:idProduct',
                },
                data: producto
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
}