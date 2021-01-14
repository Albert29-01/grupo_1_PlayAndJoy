const express = require('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');

router.get('/:idProduct', productsController.product);

module.exports = router;