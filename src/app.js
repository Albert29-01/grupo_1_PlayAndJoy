const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require ('./routes/mainRouter');
const usersRouter = require ('./routes/usersRouter');
const adminRouter = require ('./routes/adminRouter');
const productsRouter = require ('./routes/productsRouter');
const suscriptionsRouter = require ('./routes/suscriptionsRouter');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/', mainRouter);

app.use('/users', usersRouter);

app.use('/admin', adminRouter);

app.use('/product', productsRouter);

app.use('/suscriptions', suscriptionsRouter);

app.use((req,res)=>{
    res.status(404).render('404_notFound');
});

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})