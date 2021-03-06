module.exports = function(sequelize, dataTypes){
    let alias = "Image";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'images',
        timestamps: true,
        underscored: true
    }

    const Image = sequelize.define (alias, cols, config);
    
    Image.associate = function(models){
        Image.belongsTo(models.Producto, {
            as:"productos", 
            foreignKey:"id_product"
        });
    }    
    return Image
}