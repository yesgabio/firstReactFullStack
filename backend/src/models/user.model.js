const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
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
      },
    },
    {
      timestamps: false,
    }
  );
};
