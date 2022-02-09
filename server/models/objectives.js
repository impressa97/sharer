const Sequelize = require("sequelize");
const sequelize = require("../db/db");
const goods_story = require("./goods_story.js");

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
    title_for_guest: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    variant: {
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
