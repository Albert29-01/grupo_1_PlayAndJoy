const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'))
        
})

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, './views/registro.html'))
    
})

app.get('/suscription', function(req, res) {
    res.sendFile(path.join(__dirname, './views/suscriptionDetail.html'))
    
})

app.get('/carrito', function(req, res) {
    res.sendFile(path.join(__dirname, './views/carrito.html'))
    
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, './views/login.html'))
    
})

app.get('/product', function(req, res) {
    res.sendFile(path.join(__dirname, './views/product.html'))
    
})

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})