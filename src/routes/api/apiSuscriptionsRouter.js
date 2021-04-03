const express = require('express');
const router = express.Router();
const apiSuscriptionsController = require ('../../controllers/api/apiSuscriptionsController');

router.get('/:idSuscription', apiSuscriptionsController.suscription);
router.get('/', apiSuscriptionsController.general);

module.exports = router;