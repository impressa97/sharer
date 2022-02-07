const router = require("express").Router();
const { Op } = require("sequelize");
const objectives = require("../models/objectives.js");

router.post("/get-all", async (req, res) => {
  let objectivesSql = await objectives.findAll();
  console.log(objectivesSql);
  return res.status(200).send(objectivesSql);
});

module.exports = router;
