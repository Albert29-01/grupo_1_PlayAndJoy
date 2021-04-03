const db = require ('../../database/models/index')

module.exports = {
    suscription: function (req, res){
        db.Suscripcion.findByPk(req.params.idSuscription)
        .then(function(suscription){
            for (let i = 0; i < suscription.length; i++) {
                suscription[i].setDataValue('endopoint','api/suscriptions/'+suscription[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: suscription.length,
                    url: '/api/suscriptions/:idSuscription',
                },
                data: suscription
            }
            res.json(respuesta)
        
        })
        .catch(function(e){
            res.render("404_notFound")
        })        
    },
    general: function (req, res){
        db.Suscripcion.findAll()
        .then(function(suscription){
            for (let i = 0; i < suscription.length; i++) {
                suscription[i].setDataValue('endopoint','api/suscriptions/'+suscription[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: suscription.length,
                    url: '/api/suscriptions',
                },
                data: suscription
            }
            res.json(respuesta)
        }) 
        .catch(function(e){
            res.render("404_notFound")
        })
    },  
}