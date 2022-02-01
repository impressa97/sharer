const router = require("express").Router();

const goods = require("../models/goods.js");

const { Op } = require("sequelize");

router.get("/get-goods", async (req, res) => {
  const page = req.query.page * 3 * 3;
  var goodsArray = [];
  try {
    goodsArray = await goods.findAll({
      where: {
        id: {
          [Op.lt]: page,
        },
        title: {
          [Op.substring]: req.query.q || " ",
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
  console.log(goodsArray);
  res.status(200).send(goodsArray);
});

module.exports = router;
