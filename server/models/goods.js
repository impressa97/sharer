const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const goods = sequelize.define("goods", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  image_link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  note: {
    type: Sequelize.STRING(400),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = goods;
