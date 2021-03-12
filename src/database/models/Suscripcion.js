module.exports = function(sequelize, dataTypes){
    let alias = "Suscripcion";

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
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'suscripciones',
        timestamps: true,
        underscored: true
    }

    const Suscripcion= sequelize.define (alias, cols, config);
    
    /*Suscripcion.associate = function(models){
        Suscripcion.belongsToMany(models.suscripcion, 
            { as: "suscripciones",
            through: "ventas_suscripciones",
            foreignKey: "id_suscripcion",
            otherKey: "id_usuario",
            timesTamps: true,
            underscored: true
        });
    }*/
    return Suscripcion
}