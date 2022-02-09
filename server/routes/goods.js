const router = require("express").Router();
const { Op } = require("sequelize");
const image_folder = "./documents/images/";
const verify = require("./verifyToken");
const goods = require("../models/goods.js");
const goods_story = require("../models/goods_story.js");
const users = require("../models/users.js");

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

router.post(
  "/insert-goods",
  [verify, upload.single("image")],
  async (req, res) => {
    let goods_instance = null;
    try {
      goods_instance = await goods.create({
        price: req.body.price,
        note: req.body.note,
        title: req.body.title,
        image_link: "images/" + req.body.image_name,
      });
    } catch (e) {
      res.status(400).send(e);
      return;
    }
    res.status(200).send(true);
  }
);

router.post("/get-goods-story", verify, async (req, res) => {
  var goodsStoryArray = [];
  if (req.body.good_id)
    try {
      goodsStoryArray = await goods_story.findAll({
        where: {
          goods_id: {
            [Op.eq]: req.body.good_id,
          },
        },
        order: [["date", "DESC"]],
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send({ error: true });
    }
  return res.status(200).send({ error: false, goodsStoryArray });
});

router.post("/insert-goods-story", verify, async (req, res) => {
  let goods_story_instance;

  var userRoleId = await users.findByPk(req.user.id); //getting user from middleware(^verify)
  console.log(userRoleId);
  if (userRoleId.user_role_id == 1) {
    try {
      goods_story_instance = await goods_story.create({
        user_producer_id: req.body.user_producer_id,
        user_consumer_id: req.body.user_consumer_id,
        goods_id: req.body.goods_id,
        hp: req.body.hp,
        objective_id: req.body.objective_id,
        note: req.body.note,
      });
    } catch (e) {
      return res.status(400).send(e);
    }
    return res.status(200).send(goods_story_instance);
  }
  return res.status(400).send("Необходимо обладать правами администратора");
});
module.exports = router;
