module.exports = function(sequelize, dataTypes){
    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'categorias',
        timestamps: true,
        underscored: true
    }

    const Categoria = sequelize.define (alias, cols, config);
    
    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto, {
            as:"productos", 
            foreignKey:"id_categoria"
        });
    }

    Categoria.associate = function(models){
        Categoria.hasMany(models.Suscripcion, {
            as:"suscripciones", 
            foreignKey:"id_categoria"
        });
    }
    
    return Categoria
}