const db = require ('../../database/models/index');

module.exports = {
    list: function (req, res){
        db.Producto.findAll({
            include: ['images','categorias']
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
            res.json({status:500})
            console.log(e)
        })
    },
    product: function (req, res){
        db.Producto.findByPk(req.params.idProduct,{
            include: ['images','categorias']
        })
        .then(function(producto){
            producto.setDataValue('endopoint','api/product/'+producto.id)
            let respuesta = {
                meta:{
                    status: 200,
                    url: '/api/product/:idProduct',
                },
                data: producto
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
    lastProduct: function (req, res){
        db.Producto.findAll({include: ['images','categorias'],order:[["created_at","DESC"]],limit: 1})
        .then(function(producto){
            producto[0].setDataValue('endopoint','api/product/last/'+producto[0].id)
            let respuesta = {
                meta:{
                    status: 200,
                    url: '/api/product/last',
                },
                data: producto[0]
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
    category: function (req, res){
        db.Categoria.findByPk(req.params.idCategory,{
            include: ['productos']
        })
        .then(function(categoria){
            categoria.setDataValue('endopoint','api/product/category/'+categoria.id)
            let respuesta = {
                meta:{
                    status: 200,
                    url: '/api/product/category/:idCategory',
                    categoria: categoria.nombre
                },
                data: categoria
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
    categories: function (req, res){
        db.Categoria.findAll({
            include: ['productos']
        })
        .then(function(categorias){
            for (let i = 0; i < categorias.length; i++) {
                categorias[i].setDataValue('endopoint','api/product/category/'+categorias[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: categorias.length,
                    url: '/api/product/category',
                },
                data: categorias
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
    
}