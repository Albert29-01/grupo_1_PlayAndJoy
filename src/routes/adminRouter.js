const express = require('express');
const path = require('path');
const router = express.Router();
const { check , body} = require('express-validator');
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
router.post('/cargaProducto',upload.any(),[
  check("nombreProducto")
  .notEmpty().withMessage("El producto debe tener un nombre")
  .isLength({min:5}).withMessage("El producto debe tener al menos 5 caracteres"),
  check("detalle")
  .isLength({min:20}).withMessage("El detalle debe tener al menos 20 caracteres"),
  check("precio")
  .isDecimal({force_decimal: false, decimal_digits: '1,2', locale: 'en-US'}).withMessage("El precio debe tener formato 1000.00"),
  check("cantidad")
  .isInt({allow_leading_zeroes: false }).withMessage("La cantidad debe ser mayor a 0 y un número entero"),
  /*body('imagen').custom(function(filename) {
    var extension = (path.extname(filename)).toString();
    console.log(extension)
    switch (extension) { 
        case '.jpg':
            return '.jpg';
        case '.jpeg':
            return '.jpeg';
        case  '.png':
            return '.png';
        default:
            return false;
    }
}).withMessage('JPEG JPG PNG GIF') NO FUNCA!!!*/
], adminController.cargaProduct);


router.get('/editProducto/:idProduct', adminController.formEditP);
router.put('/cargaProducto/:idProduct',upload.any(),[
  check("nombreProducto")
  .notEmpty().withMessage("El producto debe tener un nombre")
  .isLength({min:5}).withMessage("El producto debe tener al menos 5 caracteres"),
  check("detalle")
  .isLength({min:20}).withMessage("El detalle debe tener al menos 20 caracteres"),
  check("precio")
  .isDecimal({force_decimal: false, decimal_digits: '1,2', locale: 'en-US'}).withMessage("El precio debe tener formato 1000.00"),
  check("cantidad")
  .isInt({allow_leading_zeroes: false }).withMessage("La cantidad debe ser mayor a 0 y un número entero"),
  /*body('imagen').custom(function(filename) {
    var extension = (path.extname(filename)).toString();
    console.log(extension)
    switch (extension) { 
        case '.jpg':
            return '.jpg';
        case '.jpeg':
            return '.jpeg';
        case  '.png':
            return '.png';
        default:
            return false;
    }
}).withMessage('JPEG JPG PNG GIF') NO FUNCA!!!*/
], adminController.editProd);

router.get('/deleteProducto/:idProduct', adminController.deleteProd);

router.get('/cargaSuscription', adminController.formCargaS);
router.post('/cargaSuscription',[
  check("tipoSuscripcion")
  .notEmpty().withMessage("La suscripción debe tener un nombre")
  .isLength({min:5}).withMessage("La suscripción debe tener al menos 5 caracteres"),
  check("detalle")
  .isLength({min:20}).withMessage("El detalle debe tener al menos 20 caracteres"),
  check("precio")
  .isDecimal({force_decimal: false, decimal_digits: '1,2', locale: 'en-US'}).withMessage("El precio debe tener formato 1000.00"),
],adminController.cargaSuscription);

router.get('/editSuscription/:idSuscription', adminController.formEditS);
router.put('/cargaSuscription/:idSuscription',[
  check("tipoSuscripcion")
  .notEmpty().withMessage("La suscripción debe tener un nombre")
  .isLength({min:5}).withMessage("La suscripción debe tener al menos 5 caracteres"),
  check("detalle")
  .isLength({min:20}).withMessage("El detalle debe tener al menos 20 caracteres"),
  check("precio")
  .isDecimal({force_decimal: false, decimal_digits: '1,2', locale: 'en-US'}).withMessage("El precio debe tener formato 1000.00"),
], adminController.editSuscrip);

router.get('/deleteSuscription/:idSuscription', adminController.deleteSuscrip);

module.exports = router;