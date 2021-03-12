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

router.get('/product/:idProduct', adminController.vistaProd);
router.get('/suscription/:idSuscription', adminController.vistaSuscrip);

router.get('/cargaProducto', adminController.formCargaP);
router.post('/cargaProducto',upload.any(), adminController.cargaProduct);

router.get('/editProducto/:idProduct', adminController.formEditP);
router.put('/cargaProducto/:idProduct',upload.any(), adminController.editProd);

router.get('/deleteProducto/:idProduct', adminController.deleteProd);

router.get('/cargaSuscription', adminController.formCargaS);
router.post('/cargaSuscription', adminController.cargaSuscription);

router.get('/editSuscription/:idSuscription', adminController.formEditS);
router.put('/cargaSuscription/:idSuscription', adminController.editSuscrip);

router.get('/deleteSuscription/:idSuscription', adminController.deleteSuscrip);

module.exports = router;