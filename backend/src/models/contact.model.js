const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Contact",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(11),
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(255),
                unique: true,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING(255),
                unique: true,
            },
            fone: {
                allowNull: false,
                type: DataTypes.STRING(255),
                unique: true,
            },
            message: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
        },
        {
            timestamps: false,
        }
    );
};
