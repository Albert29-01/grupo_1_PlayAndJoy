const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController')

router.get('/', apiProductsController.list);

router.get('/cafe', apiProductsController.cafe);
router.get('/vino', apiProductsController.vino);
router.get('/libros', apiProductsController.libros);
router.get('/musica', apiProductsController.musica);

router.get('/:idProduct', apiProductsController.product);

//CREAR API PARA EL ÚLTIMO PRODUCTO

module.exports = router;