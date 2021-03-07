module.exports = function(sequelize, dataTypes){
    let alias = "Producto";

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
        precio: {
            type: dataTypes.DECIMAL(12,2),
            notNull: true
        },
        detalle: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        info_ad: {
            type: dataTypes.STRING(200)
        },
        id_categoria: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        stock: {
            type: dataTypes.INTEGER,
            unsigned: true,
            notNull: true
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true
    }

    const Producto = sequelize.define (alias, cols, config);
    
    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria, {
            as:"categorias", 
            foreignKey:"id_categoria"
        });
    };

    Producto.associate = function(models){
        Producto.hasMany(models.Image, {
            as:"images", 
            foreignKey:"id_product",
            targetKey: "id"
        });
    }  

    /*Producto.associate = function(models){
        Producto.belongsToMany(models.producto, 
            { as: "productos",
            through: "ventas_productos",
            foreignKey: "id_producto",
            otherKey: "id_usuario",
            timesTamps: true,
            underscored: true
        });
    }*/
    return Producto;
}