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
            res.render("404_notFound")
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
            res.render("404_notFound")
        })
    },
}
