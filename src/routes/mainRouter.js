const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');
const authMiddlewares = require ('../middlewares/authMiddlewares');

router.get('/',authMiddlewares,mainController.index);

module.exports = router;