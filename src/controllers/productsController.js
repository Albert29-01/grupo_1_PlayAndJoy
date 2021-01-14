module.exports = {
product: function (req, res){
    if (req.params.idProduct == "carga"){
        res.render ('./products/cargaProducto');
    } else {
        res.render ('./products/product');
    }
},
}

