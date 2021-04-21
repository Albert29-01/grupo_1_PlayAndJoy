function adminMiddlewares(req, res, next){
    if(typeof req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.admin == 1 ){
        next()
    } else {
        res.redirect('/');
    }
}
module.exports = adminMiddlewares