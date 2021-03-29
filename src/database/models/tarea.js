module.exports = function (sequelize, DataTypes) {
    let alias = "tarea"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        titulo: {
            type: DataTypes.STRING,
            notNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            notNull: true
        },
        status: {
            type: DataTypes.STRING,
            
        },
        datestart: {
            type: DataTypes.DATE
        },
        dateend: {
            type: DataTypes.DATE
        },
    }
    let config = {
        tableName: "tarea",
        timetamps: true,
        underscored: false
    }
    const tarea = sequelize.define(alias, cols, config)
    return tarea


}