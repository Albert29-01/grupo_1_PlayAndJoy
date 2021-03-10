const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require ('../controllers/adminController');
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/img/uploads/products'));
    },
    filename: function (req, file, cb) {
      cb(null, req.body.nombreProducto + '-' + Date.now() + path.extname(file.originalname));
    }
  });
   
var upload = multer({ storage: storage });

router.get('/admin/:idProduct', adminController.vistaProd);

router.get('/cargaProducto', adminController.formCargaP);
router.post('/cargaProducto',upload.any(), adminController.cargaProduct);

router.get('/editProducto/:idProduct', adminController.formEditP);
router.put('/cargaProducto/:idProduct',upload.any(), adminController.editProd);

router.get('/deleteProducto/:idProduct', adminController.deleteProd);

router.get('/cargaSuscription', adminController.formCargaS);
router.post('/cargaSuscription', adminController.cargaSuscription);

module.exports = router;