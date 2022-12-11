const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Product",
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
            description: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            price: {
                allowNull: false,
                type: DataTypes.FLOAT(11),
            },
        },
        {
            timestamps: false,
        }
    );
};
