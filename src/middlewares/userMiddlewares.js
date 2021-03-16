const db = require("../database/models")

module.exports = function(req, res, next) {
    if(typeof req.session.usuarioLogueado != 'undefined') {
        res.locals.usuarioLogueado = req.session.usuarioLogueado
        next()
    } else if (typeof req.cookies.remember != 'undefined') {
        db.Usuario.findByPk(req.cookies.remember)
        .then(function(resultado){
            req.session.usuarioLogueado = resultado;
            res.locals.usuarioLogueado = resultado;
            next()
        }).catch(function(e){
            res.render("404_notFound")
            next()
        })
    } else {
        next()
    }
    //next()
}