const fs = require ('fs');
let productsArray = JSON.parse(fs.readFileSync('products.json',{encoding:'utf-8'}));
let suscriptionsArray = JSON.parse(fs.readFileSync('suscriptions.json',{encoding:'utf-8'}));

module.exports = {
    formCargaP: function (req, res){
        res.render ('./products/cargaProducto');
    },
    formEditP: function(req,res) {
        res.render ('./products/cargaProducto',{
            metodo: "PUT",
            producto: "",//acá recuperaríamos los datos del producto que queremos editar
        });
    },
    formCargaS: function (req, res){
        res.render ('./suscriptions/cargaSuscripcion');
    },
    cargaProduct:function(req,res){
        let producto = {
            id: productsArray.length+1,
            nombreProducto: req.body.nombreProducto,
            detalle: req.body.detalle,
            precio: req.body.precio,
            imagen: req.body.imagen, //ver guardado de imagen
            categoria: req.body.categoria,
            infoAd: req.body.infoAd,
        }
        productsArray.push(producto);
        fs.writeFileSync('products.json',JSON.stringify(productsArray));
        res.redirect('/product/'+(productsArray.length));//MUESTRA LA VISTA DEL ÚLTIMO PRODUCTO CARGADO
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