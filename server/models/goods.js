const Sequelize = require("sequelize");
const sequelize = require("../db/db");

const goods = sequelize.define("goods", {
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
});

module.exports = goods;
