const db = require ('../../database/models/index');

module.exports = {
    user: function (req, res) {
        db.Usuario.findByPk(req.params.idUser)
        .then(function(user){
            for (let i = 0; i < user.length; i++) {
                user[i].setDataValue('endopoint','api/users/'+user[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: user.length,
                    url: '/api/users/:idUser',
                },
                data: user
            }                    
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
    lastUser: function (req, res){
        db.Usuario.findAll({order:[["created_at","DESC"]],limit: 1})
        .then(function(user){
            user[0].setDataValue('endopoint','api/User/last/'+user[0].id)
            let respuesta = {
                meta:{
                    status: 200,
                    url: '/api/User/last',
                },
                data: user
            }
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
    list: function (req, res) {
        db.Usuario.findAll()
        .then(function(users){
            for (let i = 0; i < users.length; i++) {
                users[i].setDataValue('endopoint','api/users/'+users[i].id)
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: users.length,
                    url: '/api/users/:idUser',
                },
                data: users
            }                    
            res.json(respuesta)
        })
        .catch(function(e){
            res.json({status:500})
            console.log(e)
        })
    },
}
