const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const cart = sequelize.define("cart", {
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
});

module.exports = cart;
