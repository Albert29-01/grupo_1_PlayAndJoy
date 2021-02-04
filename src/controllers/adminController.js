const fs = require ('fs');
let productsArray = JSON.parse(fs.readFileSync('products.json',{encoding:'utf-8'}));
let suscriptionsArray = JSON.parse(fs.readFileSync('suscriptions.json',{encoding:'utf-8'}));

module.exports = {
    vistaProd: function (req, res){
        res.render ('./admin/adminProduct', {
            product: req.params,
        });
    },
    formCargaP: function (req, res){
        res.render ('./admin/cargaProducto');
    },
    formEditP: function(req,res) {
        res.render ('./admin/cargaProducto',{
            metodo: "PUT",
            producto: undefined,//acá recuperaríamos los datos del producto que queremos editar
        });
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
        let producto = {
            id: productsArray.length+1,
            nombreProducto: req.body.nombreProducto,
            detalle: req.body.detalle,
            precio: req.body.precio,
            imagen: req.files[0].imagen,
            categoria: req.body.categoria,
            infoAd: req.body.infoAd,
        }
        productsArray.push(producto);
        fs.writeFileSync('products.json',JSON.stringify(productsArray));
        res.redirect('/admin/admin/'+(productsArray.length));//MUESTRA LA VISTA DEL ÚLTIMO PRODUCTO CARGADO
    },
    cargaSuscription:function(req,res){
        let suscription = {
            id: suscriptionsArray.length+1,
            tipoSuscripcion: req.body.tipoSuscripcion,
            detalle: req.body.detalle,
            precio: req.body.precio,
            imagen: req.body.imagen, //ver guardado de imagen
            // ver recuperar datos checkbox
        }
        console.log(req.body);
        suscriptionsArray.push(suscription);
        fs.writeFileSync('suscriptions.json',JSON.stringify(suscriptionsArray));
        res.redirect('/suscriptions/'+(suscriptionsArray.length));//MUESTRA LA VISTA DE LA ÚLTIMA SUSCRIPCIÓN CARGADA
    },
}