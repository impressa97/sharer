const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const user_roles = sequelize.define(
  "user_roles",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    userId: false,
  }
);

module.exports = user_roles;
