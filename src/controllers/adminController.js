const fs = require ('fs');
const path = require ('path');
const db = require ('../database/models/index');
const rutaProduct = path.join(__dirname, '../products.json');
const rutaSuscriptions = path.join(__dirname, '../suscriptions.json');


let productsArray = JSON.parse(fs.readFileSync(rutaProduct,{encoding:'utf-8'}));
let suscriptionsArray = JSON.parse(fs.readFileSync(rutaSuscriptions,{encoding:'utf-8'}));

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
        res.render ('./admin/cargaProducto');
    },
    formEditP: function(req,res) {
        db.Producto.findByPk(req.params.idProduct)
        .then(function(resultado){
            res.render ('./admin/cargaProducto',{
                metodo: "PUT",
                producto: resultado,//acá recuperaríamos los datos del producto que queremos editar
            });
        })
        /*for (let i=0; i<productsArray.length; i++){
            if(productsArray[i].id == req.params.idProduct){
                res.render ('./admin/cargaProducto',{
                    metodo: "PUT",
                    producto: productsArray[i],//acá recuperaríamos los datos del producto que queremos editar
                });
            }
        }
        res.send ('Producto no encontrado');*/
    },
    deleteProd: function (req, res){
        res.render ('/lalala'); //acá enviaríamos los datos del producto eliminado
    },
    formCargaS: function (req, res){
        res.render ('./admin/cargaSuscripcion');
    },
    editProd: function (req, res){
        res.render ('/lalala'); //acá enviaríamos los datos del producto editado
    },
    cargaProduct:function(req,res){
        db.Producto.create({
            nombre: req.body.nombreProducto,
            precio: req.body.precio,
            detalle: req.body.detalle,
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