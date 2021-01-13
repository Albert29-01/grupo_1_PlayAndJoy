const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');


router.get('/login', usersController.login);

router.get('/register',usersController.register);

router.get('/cart', usersController.cart); //conviene poner :id antes de cart?

module.exports = router;