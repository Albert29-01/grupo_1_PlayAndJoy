module.exports = {
    suscription: function (req, res){
        res.render ('./suscriptions/suscriptionDetail');
    },
    general: function (req, res){
        res.render ('./suscriptions/suscriptions');
    },  
}