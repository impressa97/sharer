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
    fio: {
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
users.belongsTo(user_roles, {
  as: "user_roles_Alias",
  foreignKey: "user_role_id",
});

module.exports = users;
