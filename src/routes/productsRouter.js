const express = require('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');


router.get('/', productsController.list);
router.get('/search', productsController.search);

router.get('/cafe', productsController.cafe);
router.get('/vino', productsController.vino);
router.get('/libros', productsController.libros);
router.get('/musica', productsController.musica);

router.get('/:idProduct', productsController.product);

module.exports = router;