const router = require("express").Router();
const user = require("../models/user.js");
const bcrypt = require("bcryptjs");
const sequelize = require("../db/db");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

sequelize.sync();
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const registredUser = await user.findOne({
    where: { email: req.body.email },
  });

  if (registredUser !== null)
    return res.status(400).send("Email is already exists");

  //HASH PAWWSORD
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  try {
    user
      .create({
        login: req.body.login,
        password: hashPassword,
        email: req.body.email,
        phone_number: req.body.phone_number,
      })
      .then((response) => {
        res.send({ user: response.id });
      });
  } catch {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const loginUser = await user.findOne({
    where: { email: req.body.email },
  });

  if (loginUser === null)
    return res.status(400).send("Email or Password does not exist");

  const validPass = await bcrypt.compare(req.body.password, loginUser.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //CREATE TOKEN
  const token = jwt.sign({ id: loginUser.id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
