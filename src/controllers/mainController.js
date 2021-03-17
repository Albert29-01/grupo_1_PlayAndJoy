const db = require ('../database/models/index');

module.exports = {
    index: function (req, res) {
        db.Producto.findAll({
            limit: 6,
            include: ['images']
        })
        .then(function(productsList){
            res.render('index',{
                productsList
            });
        })
        .catch(function(e){
            res.render("404_notFound")
        })
    },
}