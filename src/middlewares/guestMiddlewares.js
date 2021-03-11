function guestMiddlewares(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        next()
    } else {
        res.redirect('/users/profile/'+req.session.usuarioLogueado.id);
    }
}
module.exports = guestMiddlewares;