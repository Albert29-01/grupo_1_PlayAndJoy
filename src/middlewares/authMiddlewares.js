function authMiddlewares(req, res, next){
    if(typeof req.session.usuarioLogueado != undefined){
        next()
    } else {
        res.redirect('/user/register');
    }
}
module.exports = authMiddlewares