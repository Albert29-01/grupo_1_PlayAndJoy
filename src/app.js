const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require ('./routes/mainRouter');
const usersRouter = require ('./routes/usersRouter');
const productsRouter = require ('./routes/productsRouter');
const suscriptionsRouter = require ('./routes/suscriptionsRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, '../public')));


app.use('/', mainRouter);

app.use('/users', usersRouter);

app.get('/suscriptions',function(req, res) {
    res.render('./suscriptions/suscriptions')
});

app.get('/suscriptions/carga',function(req, res) {
    res.render('./suscriptions/cargaSuscripcion')
});

app.get('/carrito',function(req, res) {
    res.render('./users/carrito')
});

/*app.get('/users', userRouter);

app.get('/users/register',function(req, res) {
    res.render('./users/registro')
});

app.get('/users/cart',function(req, res) {
    res.render('./users/carrito')
});

app.get('/products', function(req, res) {
    res.render('product')
});

app.get('/products/carga',function(req, res) {
    res.render('./products/cargaProducto')
});

app.get('/suscriptions',function(req, res) {
    res.render('./suscriptions/suscriptions')
});

app.get('/suscriptions/detail',function(req, res) {
    res.render('./suscriptions/suscriptionDetail')
});

/*app.get('/products', productsRouter);

app.get('/suscriptions', suscriptionsRouter);

app.get('/suscription', function(req, res) {
    res.render('suscriptionDetail')
})

app.get('/carrito', function(req, res) {
    res.render('carrito')
})

app.get('/login', function(req, res) {
    res.render('login')
})

app.get('/product', function(req, res) {
    res.render('product')  
})*/

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})