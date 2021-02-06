const fs = require ('fs');
let productsArray = JSON.parse(fs.readFileSync('products.json',{encoding:'utf-8'}));
let suscriptionsArray = JSON.parse(fs.readFileSync('suscriptions.json',{encoding:'utf-8'}));

module.exports = {
    vistaProd: function (req, res){
        res.render ('./admin/adminProduct', {
            product: req.params.idProduct,
        });
    },
    formCargaP: function (req, res){
        res.render ('./admin/cargaProducto');
    },
    formEditP: function(req,res) {
        for (let i=0; i<productsArray.length; i++){
            if(productsArray[i].id == req.params.idProduct){
                res.render ('./admin/cargaProducto',{
                    metodo: "PUT",
                    producto: productsArray[i],//acá recuperaríamos los datos del producto que queremos editar
                });
            }
        }
        res.send ('Producto no encontrado');
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
            id: productsArray[productsArray.length-1].id+1,
            ...req.body,
            imagen: req.files[0].filename,
        }
        productsArray.push(producto);
        fs.writeFileSync('products.json',JSON.stringify(productsArray));
        res.redirect('/admin/admin/'+productsArray[productsArray.length-1].id);//MUESTRA LA VISTA DEL ÚLTIMO PRODUCTO CARGADO
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