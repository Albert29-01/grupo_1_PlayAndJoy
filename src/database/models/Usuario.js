module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        first_name: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        last_name: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        imagen: {
            type: dataTypes.STRING(100)
        },
        email: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        password: {
            type: dataTypes.STRING(120),
            notNull: true
        },
        birth_date: {
            type: dataTypes.DATE,
            notNull: true
        },
        domicilio: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        localidad: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        provincia: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true
    }
       
    const Usuario = sequelize.define (alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.usuario, 
            { as: "usuarios",
            through: "ventas_suscripciones",
            foreignKey: "id_suscripcion",
            otherKey: "id_usuario",
            timesTamps: true,
            underscored: true
        });
    }

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.usuario, 
            { as: "usuarios",
            through: "ventas_productos",
            foreignKey: "id_producto",
            otherKey: "id_usuario",
            timesTamps: true,
            underscored: true
        });
    }
    
    return Usuario
}