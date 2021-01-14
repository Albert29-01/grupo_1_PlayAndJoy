const express = require('express');
const router = express.Router();
const suscriptionsController = require ('../controllers/suscriptionsController');

router.get('/:idSuscription', suscriptionsController.suscription);
router.get('/', suscriptionsController.general);

module.exports = router;