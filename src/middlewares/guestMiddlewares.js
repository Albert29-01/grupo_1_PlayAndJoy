function guestMiddlewares(req, res, next){
    if(typeof req.session.usuarioLogueado == undefined){
        next()
    } else {
        res.redirect('/users/login');
    }
}
module.exports = guestMiddlewares;