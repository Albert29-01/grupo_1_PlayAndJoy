const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const { check, body } = require('express-validator');
const usersController = require ('../controllers/usersController');
const guestMiddlewares = require ('../middlewares/guestMiddlewares');
const authMiddlewares = require ('../middlewares/authMiddlewares');

var storage = multer.diskStorage({ 
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
    cb(null, file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === null);
  }
});


router.get('/login',guestMiddlewares,usersController.login);
router.post('/login',[
  check('email')
  .isEmail().withMessage('No te olvides el @'),
  check('password')
  .notEmpty().withMessage('No te olvides la contraseña')
],usersController.session);

router.get('/profile/:idUser/logout',authMiddlewares,usersController.logout);

router.get('/profile/:idUser/editPassword',authMiddlewares,usersController.editPassword);
router.put('/profile/:idUser/editPassword',authMiddlewares,[
  check('password')
  .notEmpty().withMessage('No te olvides la contraseña')
  .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
],usersController.updatePassword);

router.get('/profile/:idUser/editProfile',authMiddlewares,usersController.editProfile);
router.put('/profile/:idUser/editProfile',authMiddlewares,[
  upload.fields([{name:'avatar'}]),
  check('email').isEmail().withMessage('Debes ingresar un email válido'),
  check('nombre')
  .notEmpty().withMessage('Campo nombre requerido'),
  check('apellido')
  .notEmpty().withMessage('Campo apellido requerido'),
  body("avatar").custom(function(value, {req}){
    if(typeof req.files.avatar != "undefined"){ 
        return true;
    } else {
        throw new Error('Al menos una image es obligatoria (PNG, JPG, JPEG o GIF)');
    }
})
],usersController.updateProfile);

router.get('/profile/:idUser',authMiddlewares,usersController.profile);

router.get('/register',guestMiddlewares,usersController.register);
router.post('/register',[
  upload.fields([{name:'avatar'}]),
  check('email').isEmail().withMessage('Debes ingresar un email válido'),
  check('password')
  .notEmpty().withMessage('No te olvides la contraseña')
  .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
  check('nombre')
  .notEmpty().withMessage('Campo nombre requerido'),
  check('apellido')
  .notEmpty().withMessage('Campo apellido requerido'),
  body("avatar").custom(function(value, {req}){
    if(typeof req.files.avatar != "undefined"){ 
        return true;
    } else {
        throw new Error('Al menos una image es obligatoria (PNG, JPG, JPEG o GIF)');
    }
})
],usersController.crearCuenta);


router.get('/cart', usersController.cart); //conviene poner :id antes de cart?

module.exports = router;