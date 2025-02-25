const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Image = sequelize.define("Image", {
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    classification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    probability: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Image;
