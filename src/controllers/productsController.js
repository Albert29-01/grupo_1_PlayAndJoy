const fs = require ('fs');
const path = require ('path');
const rutaProduct = path.join(__dirname, '../products.json');


let productsArray = JSON.parse(fs.readFileSync(rutaProduct,{encoding:'utf-8'}));

module.exports = {
    list: function (req, res){
        res.render ('./products/productList', {
            productsArray: productsArray,
        });
    },
    product: function (req, res){
        res.render ('./products/product');
    },
}