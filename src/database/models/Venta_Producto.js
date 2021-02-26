module.exports = function(sequelize, dataTypes){
    let alias = "Venta";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_producto: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        id_usuario: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'ventas',
        timestamps: true,
        underscored: true
    }

    const Venta = sequelize.define (alias, cols, config);
    
    return Venta
}