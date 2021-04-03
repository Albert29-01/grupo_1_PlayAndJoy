const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require ('./routes/mainRouter');
const usersRouter = require ('./routes/usersRouter');
const apiUsersRouter = require ('./routes/api/apiUsersRouter');
const adminRouter = require ('./routes/adminRouter');
const productsRouter = require ('./routes/productsRouter');
const apiProductsRouter = require ('./routes/api/apiProductsRouter');
const suscriptionsRouter = require ('./routes/suscriptionsRouter');
const apiSuscriptionsRouter = require ('./routes/api/apiSuscriptionsRouter');
const methodOverride = require ('method-override');
const cookieParser = require ('cookie-parser');
const session = require('express-session');
const userMiddleware = require("./middlewares/userMiddlewares");


let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({secret:"esto es una frase ultra secreta",resave: true,saveUninitialized: true}));

app.use(cookieParser());
app.use(userMiddleware);

app.use('/', mainRouter);

app.use('/users', usersRouter);
app.use('/api/users', apiUsersRouter);

app.use('/admin', adminRouter);

app.use('/product', productsRouter);
app.use('/api/product', apiProductsRouter);

app.use('/suscriptions', suscriptionsRouter);
app.use('/api/suscriptions',apiSuscriptionsRouter);

app.use((req,res)=>{
    res.status(404).render('404_notFound');
});

app.listen(port, function() {
    console.log(`El servidor está corriendo en el puerto: ${port}`)
    console.log("http://localhost:3000")
})