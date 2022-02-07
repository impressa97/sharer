const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const objectives = sequelize.define(
  "objectives",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = objectives;
