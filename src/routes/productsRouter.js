const express = require('express');
const router = express.Router();
//const productsController = require ('../controllers/productsController');

router.get('/:idProduct', function (req, res){
    if (req.params == "carga"){
        res.render ('./products/cargaProducto');
    } else {
        res.render ('./products/product');
    }
});

//router.get('/carga', productsController.cargaProduct);

module.exports = router;