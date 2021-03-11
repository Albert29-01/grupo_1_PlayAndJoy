module.exports = function(req,res,next){
    if ( typeof req.session != "undefined" && typeof req.session.usuarioLogueado != "undefined") {
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
    }
    next();
}