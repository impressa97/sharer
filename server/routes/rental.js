const router = require("express").Router();

const user = require("../models/user.js");
const sequelize = require("../db/db");

sequelize.sync();

router.get("/get-equipment", async (req, res) => {
  const page = req.page;
  console.log(page);
  res.status(200).send({
    response: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
});

module.exports = router;
