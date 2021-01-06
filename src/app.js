const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require ('./routes/mainRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', mainRouter);

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, './views/registro'))
    
})

app.get('/suscription', function(req, res) {
    res.sendFile(path.join(__dirname, './views/suscriptionDetail'))
    
})

app.get('/carrito', function(req, res) {
    res.sendFile(path.join(__dirname, './views/carrito'))
    
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, './views/login'))
    
})

app.get('/product', function(req, res) {
    res.sendFile(path.join(__dirname, './views/product'))
    
})

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})