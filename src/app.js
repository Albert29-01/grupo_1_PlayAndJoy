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


app.get('/', mainRouter);

app.get('/users/login',function(req, res) {
    res.render('./users/login')
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