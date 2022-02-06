const Sequelize = require("sequelize");
const sequelize = require("../db/db");
const user_roles = require("./user_roles.js");

const users = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_role_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

users.hasOne(user_roles);

module.exports = users;
