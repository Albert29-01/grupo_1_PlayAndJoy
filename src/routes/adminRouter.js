const express = require('express');
const router = express.Router();
const adminController = require ('../controllers/adminController');

router.get('/cargaProducto', adminController.formCargaP);
router.post('/cargaProducto', adminController.cargaProduct);

router.get('/cargaSuscription', adminController.formCargaS);
router.post('/cargaSuscription', adminController.cargaSuscription);

module.exports = router;