const router = require("express").Router();
const image_folder = "./documents/images/";

const multer = require("multer");

var storage = multer.diskStorage({
  destination: image_folder,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  onError: function (err, next) {
    console.log("error", err);
    next(err);
  },
});
const upload = multer({ storage: storage });

const verify = require("./verifyToken");
const goods = require("../models/goods.js");

const { Op } = require("sequelize");

router.get("/get-goods", verify, async (req, res) => {
  const page = req.query.page * 3 * 100;
  var goodsArray = [];
  if (req.query.q)
    try {
      goodsArray = await goods.findAll({
        where: {
          id: {
            [Op.lt]: page,
          },
          title: {
            [Op.substring]: req.query.q || "",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  console.log(goodsArray);
  res.status(200).send(goodsArray);
});

router.post("/delete-goods", verify, async (req, res) => {
  console.log(req.body.goods_id);
  if (req.body.goods_id)
    try {
      let good = await goods.findByPk(req.body.goods_id);
      good.destroy();
      res.status(200).send({ success: true });
    } catch (e) {
      res.status(400).send({ success: false });
      console.log(e);
    }
  else res.status(400).send({ success: false });
});

router.post("/insert-goods", [verify, upload.single("image")], async (req, res) => {
  let goods_instance = null;
  try {
    goods_instance = await goods.create({ price: req.body.price, note: req.body.note, title: req.body.title, image_link: "images/" + req.body.image_name });
  } catch (e) {
    res.status(400).send(e);
    return;
  }
  res.status(200).send(true);
});

module.exports = router;
