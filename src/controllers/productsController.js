const fs = require ('fs');
let productsArray = JSON.parse(fs.readFileSync('products.json',{encoding:'utf-8'}));

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