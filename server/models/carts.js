const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const carts = sequelize.define("carts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  note: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  item_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = carts;
