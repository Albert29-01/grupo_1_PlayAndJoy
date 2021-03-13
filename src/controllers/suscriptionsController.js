const { decodeBase64 } = require("bcryptjs");
const db = require ('../database/models/index')

module.exports = {
    suscription: function (req, res){
        db.Suscripcion.findByPk(req.params.idSuscription)
        .then(function(suscription){
            res.render ('./suscriptions/suscriptionDetail',{
                suscription
            });
        })
    },
    general: function (req, res){
        db.Suscripcion.findAll()
        .then(function(suscriptionsArray){
            res.render ('./suscriptions/suscriptions',{
                suscriptionsArray
            });
        })
    },  
}