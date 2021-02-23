function guestMiddlewares(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next()
    } else {
        res.redirect('/users/profile');
    }
}
module.exports = guestMiddlewares;