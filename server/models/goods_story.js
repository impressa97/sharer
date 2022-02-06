const Sequelize = require("sequelize");
const sequelize = require("../db/db");
const users = require("./users.js");

const goods_story = sequelize.define(
  "goods_story",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_producer_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    user_consumer_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    goods_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    hp: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    objective_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    note: {
      type: Sequelize.STRING(1000),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

goods_story.belongsTo(users, { as: "user_producerAlias", foreignKey: "user_producer_id" });
goods_story.belongsTo(users, { as: "user_consumerAlias", foreignKey: "user_consumer_id" });

module.exports = goods_story;
