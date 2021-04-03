const express = require('express');
const router = express.Router();
const apiUsersController = require ('../../controllers/api/apiUsersController');


router.get('/', apiUsersController.list);
router.get('/:idUser', apiUsersController.user);

module.exports = router;