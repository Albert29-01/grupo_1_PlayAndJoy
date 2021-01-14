module.exports = {
    suscription: function (req, res){
        if (req.params.idSuscription == "carga"){
            res.render ('./suscriptions/cargaSuscripcion');
        } else {
            res.render ('./suscriptions/suscriptionDetail');
        }
    },
    general: function (req, res){
        res.render ('./suscriptions/suscriptions');
    },  
}