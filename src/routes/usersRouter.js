const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const { check } = require('express-validator');
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

var upload = multer({ storage: storage,
  fileFilter: function (req, file, cb) {
    console.log(file.mimetype)
    switch (file.mimetype){
      case 'image/jpg':
        return cb(null, true);
      case 'image/jpeg':
        return cb(null, true);
      case  'image/png':
        return cb(null, true);
      case  'image/gif':
        return cb(null, true);
      default:
        return cb(null, false);
    }
  } });


router.get('/login',guestMiddlewares,usersController.login);
router.post('/login',[
  check('email')
  .isEmail().withMessage('No te olvides el @'),
  check('password')
  .isEmpty().withMessage('No te olvides la contraseña')
],usersController.session);

router.get('/profile/:idUser/logout',authMiddlewares,usersController.logout);
router.get('/profile/:idUser/editProfile',authMiddlewares,usersController.editProfile);
router.put('/profile/:idUser/editProfile',authMiddlewares,upload.any(),[
  check('email').isEmail().withMessage('Debes ingresar un email válido'),
  check('nombre')
  .notEmpty().withMessage('Campo nombre requerido'),
  check('apellido')
  .notEmpty().withMessage('Campo apellido requerido'),
  check('avatar').notEmpty().withMessage('Los formatos de imagen admitidos son JPEG, JPG, GIF, PNG.'),
],usersController.updateProfile);
router.get('/profile/:idUser',authMiddlewares,usersController.profile);

router.get('/register',guestMiddlewares,usersController.register);
router.post('/register',upload.any(),[
  check('email').isEmail().withMessage('Debes ingresar un email válido'),
  check('password')
  .notEmpty().withMessage('No te olvides la contraseña')
  .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
  check('nombre')
  .notEmpty().withMessage('Campo nombre requerido'),
  check('apellido')
  .notEmpty().withMessage('Campo apellido requerido'),
  check('avatar').notEmpty().withMessage('Los formatos de imagen admitidos son JPEG, JPG, GIF, PNG.'),
],usersController.crearCuenta);


router.get('/cart', usersController.cart); //conviene poner :id antes de cart?

module.exports = router;