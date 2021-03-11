const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const usersController = require ('../controllers/usersController');
const guestMiddlewares = require ('../middlewares/guestMiddlewares');
const authMiddlewares = require ('../middlewares/authMiddlewares');

var storage = multer.diskStorage({ //ver que no se cargue la imagen si hay errores en el formulario
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/img/uploads/avatars'));
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname));
    }
  });
   
var upload = multer({ storage: storage });


router.get('/login',guestMiddlewares,usersController.login);
router.post('/login',usersController.session);

router.get('/profile/:idUser/logout',authMiddlewares,usersController.logout);
router.get('/profile/:idUser/editProfile',authMiddlewares,usersController.editProfile);
router.put('/profile/:idUser/editProfile',authMiddlewares,usersController.updateProfile);
router.get('/profile/:idUser',authMiddlewares,usersController.profile);

router.get('/register',guestMiddlewares,usersController.register);
router.post('/register',upload.any(),usersController.crearCuenta);


router.get('/cart', usersController.cart); //conviene poner :id antes de cart?

module.exports = router;